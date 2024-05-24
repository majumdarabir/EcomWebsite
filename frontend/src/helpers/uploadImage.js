// const url = `https://api.cloudinary.com/v1_1/ddwo8iuhl/image/upload`

// const uploadImage = async (image) => {
//     const formData = new FormData()
//     formData.append("file", image)
//     formData.append("upload_preset", "mern_product")


//     const dataResponse = await fetch(url, {
//         method: "post",
//         body: formData
//     })

//     return dataResponse.json()

// }

// export default uploadImage 

const url = `https://api.cloudinary.com/v1_1/ddwo8iuhl/image/upload`;

const uploadImage = async (image) => {
    try {
        // Check if the image file is provided
        if (!image) {
            throw new Error("No image file provided");
        }

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "mern_product");
        formData.append("upload_cloud", "ddwo8iuhl")
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        // Check if the response is not okay
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error.message || 'An error occurred during the upload');
        }

        const data = await response.json();
        console.log("aa")
        return data;
    } catch (error) {
        console.error('Error uploading image:', error.message);
        throw error; // Re-throw the error after logging it
    }
};

export default uploadImage;
