import os
from osgeo import gdal, osr
import numpy as np

class ImageProcessor:
    def __init__(self, input_folder, output_folder):
        self.input_folder = input_folder
        self.output_folder = output_folder
        os.makedirs(output_folder, exist_ok=True)

    def process_image(self, image_file, lat, lon, alt):
        """Process and georeference an image using GDAL."""
        input_path = os.path.join(self.input_folder, image_file)
        output_path = os.path.join(self.output_folder, f"geo_{image_file}")

        # Open the input image
        ds = gdal.Open(input_path)
        if ds is None:
            print(f"Failed to open {input_path}")
            return

        # Get image dimensions
        width = ds.RasterXSize
        height = ds.RasterYSize

        # Create output dataset
        driver = gdal.GetDriverByName('GTiff')
        out_ds = driver.Create(output_path, width, height, ds.RasterCount, ds.GetRasterBand(1).DataType)

        # Set geotransform
        pixel_size = 1.0  # This should be calculated based on your camera parameters and altitude
        geotransform = (lon - (width/2)*pixel_size, pixel_size, 0, lat + (height/2)*pixel_size, 0, -pixel_size)
        out_ds.SetGeoTransform(geotransform)

        # Set projection (WGS84)
        srs = osr.SpatialReference()
        srs.ImportFromEPSG(4326)  # WGS84
        out_ds.SetProjection(srs.ExportToWkt())

        # Copy data
        for i in range(1, ds.RasterCount + 1):
            out_ds.GetRasterBand(i).WriteArray(ds.GetRasterBand(i).ReadAsArray())

        # Close datasets
        ds = None
        out_ds = None

        # Use gdal.Warp to apply more advanced georeferencing
        gdal.Warp(output_path, output_path, 
                  dstSRS='EPSG:4326',
                  resampleAlg=gdal.GRA_Bilinear,
                  outputType=gdal.GDT_Byte)

        print(f"Processed: {image_file} -> {output_path}")