
const CardView = ({val}) =>{
  const forTitle = ()=>{
    if(val.title){
      if(val.title.length > 70){
      return  val.title.substr(0,70) + " ..."
      }
      return val.title
    }
  }
  return (
    <div className="item">

          <div className="card justify-content-center" style={{padding:".6rem"}}>

              <div className="img-container">
                <img className="card-img-top" src={val.imgUrl1} alt={"Fill in the form to see something"} />
              </div>

            <div className="card-body">

                  <h5 className="card-title first-h5">{val.Brand}</h5>
                  <p className="card-text">{forTitle()} </p>
                  <h5 className="card-title second-h5">{new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(val.price)}</h5>
            </div>

            <div className="discount">
              {val.discountPercentage?`${val.discountPercentage}%`:""}
            </div>
          </div>

    </div>
  )
}

export default CardView;
