import numpy as np
import pymap3d as pm

class DirectGeoreferencing:
    def __init__(self, a=6378137.0, b=6378137.0, c=6356752.314245):
        self.a = a  # semi-major axis of the ellipsoid
        self.b = b  # semi-minor axis of the ellipsoid
        self.c = c  # polar radius of the ellipsoid

    # ... (rest of the methods remain the same as in the previous implementation)

    def georeference_image(self, lat, lon, alt, roll, pitch, yaw, sensor_coords, focal_point):
        """Georeference an image given sensor parameters and position."""
        # Convert sensor coordinates to NED frame
        sensor_ned = self.rotate_payload_to_ned(sensor_coords, roll, pitch, yaw)
        focal_ned = self.rotate_payload_to_ned(focal_point, roll, pitch, yaw)
        
        # Convert NED to ECEF
        sensor_ecef = self.ned_to_ecef(lat, lon, alt, sensor_ned)
        focal_ecef = self.ned_to_ecef(lat, lon, alt, focal_ned)
        
        # Find ground intersection point
        ground_point_ecef = self.find_ground_intersection(sensor_ecef, focal_ecef)
        
        # Convert ground point to geodetic coordinates
        lat, lon, alt = self.ecef_to_geodetic(*ground_point_ecef)
        
        return lat, lon, alt