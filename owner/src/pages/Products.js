import React from 'react'

function Products() {
  return (

            <>
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Navaigation />
                    </div>
                    <div className="w3-panel w3-center w3-container w3-light-grey" style={{ padding: '128px 128px' }}>
                        <div className="w3-main" style={{ marginLeft: 300, marginTop: 43 }}>
                            <div className="w3-twothird">
                                <h5>Feeds</h5>
                                <table className="w3-table w3-striped w3-white">
                                    <tbody>
                                    <tr>
                                        <td>
                                             <i className="fa fa-user w3-text-blue w3-large" />
                                        </td>
                                        <td>Family Protection.</td>
                                        <td>
                                            <button onclick="getService(64a5a92845f9b7e72cb7a82e)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-bell w3-text-red w3-large" />
                                        </td>
                                        <td>Retirement Planning.</td>
                                        <td>
                                            <button onclick="getService(64a5b23af1c0973ba3a23918)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-users w3-text-yellow w3-large" />
                                        </td>
                                        <td>Dream Vacation.</td>
                                        <td>
                                            <button onclick="getService(64a5b2a0f1c0973ba3a2391a)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <i className="fa fa-comment w3-text-red w3-large" />
                                        </td>
                                        <td>Dream Car</td>
                                        <td>
                                            <button onclick="getService(64a5b2b5f1c0973ba3a2391c)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-bookmark w3-text-blue w3-large" />
                                        </td>
                                        <td>Child Education.</td>
                                        <td>
                                            <button onclick="getService(64a5b349f1c0973ba3a2391e)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <i className="fa fa-laptop w3-text-red w3-large" />
                                        </td>
                                        <td>Child Wedding.</td>
                                        <td>
                                            <button onclick="getService(64a5b36bf1c0973ba3a23920)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                                    <tr>
                                         <td>
                                            <i className="fa fa-share-alt w3-text-green w3-large" />
                                        </td>
                                        <td>Dream Home.</td>
                                        <td>
                                            <button onclick="getService(64a5b39ef1c0973ba3a23922)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <i className="fa fa-share-alt w3-text-green w3-large" />
                                        </td>
                                        <td>Custom Goal.</td>
                                        <td>
                                            <button onclick="getService(64a5b3baf1c0973ba3a23924)"><i>Edit</i></button> 
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                
                <hr />

                    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact">
                    <div className="col-md-6 calculator-container w3-row-padding">
                    <div className="w3-col m6">
                    <form target="_blank" method='POST' onSubmit={handleSubmit}>
                    <p>
                        <input
                        type="text"
                        className="w3-input w3-border"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        required
                        />
                    </p>
                    <p>
                        <textarea
                        className="w3-input w3-border"
                        name="description" rows={5} cols={80}
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                        required
                        ></textarea>
                    </p>
                    <p>
                        <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        required
                        />
                    </p>
                    <p>
                        <button className="w3-button w3-blue" type="submit">
                        <i className="fa fa-paper-plane" /> SEND MESSAGE
                        </button>
                    </p>
                    </form>
                </div>
                    </div>
                
                </div>

    
        </>
    )
}

export default Products