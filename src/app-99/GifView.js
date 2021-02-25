import PropTypes from "prop-types";

function GifView(props) {
    console.log(props);
    return (
        <div>
          {props.isLoading ? (<div>....Loading</div>
          ) : (
            <div className="container">
              <div className="row">
                {props.giphyArray.map((item) => {
                  return (
                    <div className="col-sm-4" key={item.url}>
                      <div className="card">
                        <div className="card-body">
                          <div>
                            <img src={item.images.fixed_width.url} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      );
}

GifView.propTypes = {
  giphyArray: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
};

export default GifView;