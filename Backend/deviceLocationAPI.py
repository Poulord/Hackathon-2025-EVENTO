from aggregator_opengateway_sdk import ClientCredentials, DeviceLocation

credentials = ClientCredentials(
    client_id='0f57c7b9-9d68-497d-95ea-5ed4e589484c',
    client_secret='5f7e0446-5c2b-4307-b1ad-b26f833009be'
)

customer_phone_number = "+34669178704"

devicelocation_client = DeviceLocation(credentials=credentials, phone_number=customer_phone_number)

result = devicelocation_client.verify(40.5150, -3.6640, 10, customer_phone_number)  # as set in the authorization step

print(f"Is the device in location? {result}")