import os
from datetime import datetime
from georeferencer import DirectGeoreferencing
from data_processor import FlightDataProcessor
from image_processor import ImageProcessor

def main():
    # Configuration
    image_folder = 'path/to/image/folder'
    flight_data_file = 'path/to/flightdata.csv'
    output_folder = 'path/to/output/folder'
    
    # Initialize processors
    flight_data = FlightDataProcessor(flight_data_file)
    georef = DirectGeoreferencing()
    img_processor = ImageProcessor(image_folder, output_folder)
    
    # Process each image in the folder
    for image_file in os.listdir(image_folder):
        if image_file.endswith(('.jpg', '.png', '.tif')):
            # Extract timestamp from filename
            timestamp = datetime.strptime(image_file.split('.')[0], '%Y%m%d%H%M%S')
            
            # Get flight data for this timestamp
            lat, lon, alt, roll, pitch, yaw = flight_data.get_interpolated_data(timestamp)
            
            # Get image parameters (this would come from your camera calibration)
            sensor_coords = [0, 0, 0]  # Example values
            focal_point = [0, 0, -0.1]  # Example values
            
            # Georeference the image
            ground_lat, ground_lon, ground_alt = georef.georeference_image(
                lat, lon, alt, roll, pitch, yaw, sensor_coords, focal_point
            )
            
            # Process and save the georeferenced image
            img_processor.process_image(image_file, ground_lat, ground_lon, ground_alt)
    
    print("Georeferencing complete. Output saved to:", output_folder)

if __name__ == "__main__":
    main()
