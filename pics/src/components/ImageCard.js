import React from 'react';


class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const rowHeight = Math.ceil(height / 10) + 2;

        this.setState({ spans: rowHeight });
    }

    render() {
        const {alt_description, urls } = this.props.image;

        return (
            <div className="image-frame" style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
            </div>
        );
    }
}

export default ImageCard;