import pandas as pd
from datetime import datetime

class FlightDataProcessor:
    def __init__(self, csv_file):
        self.data = pd.read_csv(csv_file)
        self.data['timestamp'] = pd.to_datetime(self.data['timestamp'])
        self.data.set_index('timestamp', inplace=True)

    def get_interpolated_data(self, timestamp):
        """Get interpolated flight data for a given timestamp."""
        # Find the two closest data points
        before = self.data.loc[self.data.index <= timestamp].iloc[-1]
        after = self.data.loc[self.data.index > timestamp].iloc[0]
        
        # Calculate weights based on time difference
        total_diff = (after.name - before.name).total_seconds()
        weight_before = 1 - (timestamp - before.name).total_seconds() / total_diff
        weight_after = 1 - weight_before
        
        # Interpolate values
        lat = weight_before * before['latitude'] + weight_after * after['latitude']
        lon = weight_before * before['longitude'] + weight_after * after['longitude']
        alt = weight_before * before['altitude'] + weight_after * after['altitude']
        roll = weight_before * before['roll'] + weight_after * after['roll']
        pitch = weight_before * before['pitch'] + weight_after * after['pitch']
        yaw = weight_before * before['yaw'] + weight_after * after['yaw']
        
        return lat, lon, alt, roll, pitch, yaw