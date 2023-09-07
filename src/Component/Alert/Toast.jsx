


const Toast = (prop ) => {

    return (
      <div  className="show"  >
  
        <div >
          <strong className="me-auto">{prop.title}</strong>
          
        </div>
  
        <div className="toast-body">
          {
            typeof(body) === 'string'
            ? prop.body
            : 
            <ul>
              {
                prop.body?.map((text, index) => (
                  <li key={index}>{text}</li>
                ))
              }
            </ul> 
          }
        </div>
  
      </div>
    )
  }
  
  export default Toast
  