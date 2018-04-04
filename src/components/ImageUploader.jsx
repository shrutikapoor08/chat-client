import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/clientActions';

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {}
    };
  }
  handleUpload = event => {
    const file = event.target.files[0];
    const { user, uploadImage } = this.props;
    const reader = new FileReader();
    reader.onload = () => {
      const imageSrc = reader.result;
      const imageTitle = file.name;
      const image = {
        imageSrc,
        imageTitle
      };
      this.setState({
        image: image
      });
      uploadImage({
        user: user,
        image: image
      });
    };
    if (reader && file) {
      reader.readAsDataURL(file);
    }
  };

  cancelUpload = () => {
    this.setState({
      image: {}
    });
    this.props.uploadImage({
      user: this.props.user,
      image: {}
    });
  };

  render() {
    const { image } = this.state;
    return (
      <div className="image-uploader">
        <div className="image-input">
          <input type="file" accept="image/*" onChange={this.handleUpload} />
        </div>
        {image && (
          <div className="preview-image">
            <button onClick={this.cancelUpload}>Cancel</button>
            <img key="image.name" src={image.imageSrc} className="image" />
          </div>
        )}
      </div>
    );
  }
}

ImageUploader.propTypes = {
  actions: PropTypes.object,
  user: PropTypes.object,
  recepient: PropTypes.object
};

const mapDispatchToProps = {
  uploadImage: actions.uploadImage
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
