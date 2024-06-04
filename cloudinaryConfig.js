import { Cloudinary } from '@cloudinary/url-gen';

const cloudinary = new Cloudinary({
    cloudName: 'your_cloud_name',
    // api_key: 'your_api_key',
    // api_secret: 'your_api_secret'
});

export default cloudinary;
