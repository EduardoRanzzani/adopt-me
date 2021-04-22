import { Component, MouseEvent, ReactNode } from "react";

interface Props {
  images: string[]
}

class Carousel extends Component<Props> {
  state = {
    active: 0
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  };

  handleIndexClick = (event : MouseEvent<HTMLElement>):  void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (typeof event.target.dataset.index === "number") {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  };

  render(): ReactNode {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {
            images.map((photo, index) => (
              // eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                data-index={index}
                onClick={this.handleIndexClick}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            ))
          }
        </div>
      </div>
    );
  }

}

export default Carousel;