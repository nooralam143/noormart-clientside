

const AddBrand = () => {
    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const brandImageURL = form.brandImageURL.value;
        const brandName = form.brandName.value;
        const shortDescription = form.shortDescription.value;
        const addBrand = { brandImageURL, brandName, shortDescription };
        console.log('Brand Data:', addBrand);
        
        fetch('http://localhost:5000/brands', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addBrand)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("brand Add successfully");
                    form.reset();
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    return (
        
        <div className="conatiner mx-auto bg-white p-4 shadow-md rounded-lg">
        <div className="max-w-md mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4">Add Brand</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="brandImageURL" className="block text-sm font-medium text-gray-600">Brand Image URL:</label>
                    <input
                        type="text"
                        id="brandImageURL"
                        name="brandImageURL"
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="brandName" className="block text-sm font-medium text-gray-600">Brand Name:</label>
                    <input
                        type="text"
                        id="brandName"
                        name="brandName"
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-600">Short Description:</label>
                    <textarea
                        id="shortDescription"
                        name="shortDescription"
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                        rows="4"
                        required
                    />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add Brand
                </button>
            </form>
        </div>
        </div>

        
    );
};

export default AddBrand;