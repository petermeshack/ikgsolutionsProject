function CustomCard(props) {
    return (
      <>
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="card indigo darken-4">
              <div class="card-content white-text">
                <center><span class="card-title red-text"><b>{props.title}</b></span></center>
                <p>{props.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CustomCard;