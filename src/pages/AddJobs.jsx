// import Swal from "sweetalert2";

const AddJobs = () => {

    const handleAddJobs = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const category = form.category.value;
        const minPrice = form.minprice.value;
        const maxPrice = form.maxprice.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const newJob = { title, email, category, minPrice, maxPrice, deadline, description };
        console.log(newJob);

        // fetch('/jobs', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newProduct)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Product Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //         }
        //     })
    }


    return (
        <div className="bg-[#F4F8F9] p-24">
            <h2 className="text-3xl text-center mb-5 font-extrabold">Add a Job</h2>
            <form onSubmit={handleAddJobs}>
                {/* 1st row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label>
                            <input type="text" name="title" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="">
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/* 2nd row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label>
                            <input type="date" name="deadline" id="" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/4 md:ml-4">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <label>
                            <select name="category" className="select select-bordered w-full">
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control md:ml-4 md:w-1/4">
                        <label className="label">
                            <span className="label-text">Min Price</span>
                        </label>
                        <label>
                            <input type="text" name="minprice" placeholder="Min Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/4 md:ml-4">
                        <label className="label">
                            <span className="label-text">Max Price</span>
                        </label>
                        <label>
                            <input type="text" name="maxprice" placeholder="Max Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* 3rd row */}

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label>
                            <input type="textarea" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn text-white hover:text-gray-800 btn-block bg-main" />

            </form>
        </div>
    );
};

export default AddJobs;