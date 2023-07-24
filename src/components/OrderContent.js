import "bootstrap/dist/css/bootstrap.min.css";

function CheckoutItems() {
    return (

        <div style={{marginTop: '10%'}}>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe style={{width: "100%", height: "800px", border: '1px solid gray'}} src="https://maps.google.com/maps?q=Ottawa&t=&z=15&ie=UTF8&iwloc=&output=embed">
                    </iframe>
                </div>
            </div>
        </div>

    );
}
  
export default CheckoutItems;