function CustomCardSubH(props) {
    return (
      <>
        <div class="row">
          <div class="col s12 m12">
            <div class="card indigo darken-1">
              <div class="card-content white-text">
              <center><span class="card-title red darken-1-text"><b>{props.title}</b></span></center>
                <p>{props.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CustomCardSubH;