function CustomCardSubHListOl(props) {
    return (
      <>
        <div class="row">
          <div class="col s12 m12">
            <div class="card indigo darken-1">
              <div class="card-content white-text">
              <span class="card-title red darken-1-text"><b>{props.title}</b></span>
                <p>{props.subtitle}</p>
                <ol class="collection">
                  {props.content.map((item, index) => (
                    <li class="collection-item black-text" key={index}>
                      <strong class="green darken-4-text">{item.heading}</strong>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ol>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CustomCardSubHListOl;