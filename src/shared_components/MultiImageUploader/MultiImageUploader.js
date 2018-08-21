import React, { Component } from 'react';
import FineUploaderTraditional from 'fine-uploader-wrappers';
import Gallery from 'react-fine-uploader';
import { serverBaseURL } from 'libs/Utils';
import 'react-fine-uploader/gallery/gallery.css';

const uploader = new FineUploaderTraditional({
  options: {
    autoUpload: true,
    chunking: {
      enabled: false,
    },
    deleteFile: {
      enabled: false
    },
    request: {
      endpoint: `${serverBaseURL()}/media`,
    },
    validation: {
      allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
      sizeLimit: 10000000
    },
  },
});

uploader.on('error', (id, name, errorReason) => {
  alert(errorReason);
})

export default class MultiImageUploader extends Component {
  render() {
    const fileInputChildren = <span>Choose Files</span>;

    return <Gallery fileInput-children={fileInputChildren} uploader={uploader} />;
  }
}
