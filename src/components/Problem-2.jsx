import React, { useState, useEffect } from 'react';

const Problem2 = () => {

    const [countries , setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://contact.mediusware.com/api/country-contacts/bangladesh/?page=1')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])

    console.log(countries);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#allContactModal">All Contacts</button>
                    <div className="modal fade" id="allContactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal A</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-primary">Button A</button>
                                    <button type="button" className="btn btn-primary"data-bs-toggle="modal" data-bs-target="#UsContactModal" >Button B</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-outline-warning" data-bs-toggle="modal" data-bs-target="#UsContactModal" type="button" >US Contacts</button>
                    <div className="modal fade" id="UsContactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal B</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal Content Goes Here</p>
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#allContactModal">Button A</button>
                                    <button type="button" className="btn btn-primary">Button B</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Problem2;