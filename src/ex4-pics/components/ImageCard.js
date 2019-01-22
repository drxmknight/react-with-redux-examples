import React from 'react';

class ImageCard extends React.Component {
    // Initialize component state and set reference to its virtual DOM obj.
    constructor(props) {
        super(props);
        // Create a reference to this DOM.
        this.imageCardRef = React.createRef();
        // Initialize componenet state.
        this.state = { spans: 0 }
    };

    // Called on componenet creation.
    componentDidMount() {
        this.imageCardRef.current.addEventListener('load', this.setSpans);
    };

    // Set the spans for every image.
    setSpans = () => {
        const height = this.imageCardRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    };

    /* Render the component.
     * set grid-row-end style to the component required spans.
     */
    render() {
        // Assignation by object destructuring.
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img alt={description} src={urls.regular} ref={this.imageCardRef}>
                </img>
            </div>
        );
    }
};

// Export ImageCard component.
export default ImageCard;