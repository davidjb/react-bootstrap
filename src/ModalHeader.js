import React from 'react';
import classNames from 'classnames';

class ModalHeader extends React.Component {
  render() {
    let { 'aria-label': label, ...props } = this.props;

    return (
      <div
        {...this.props}
        className={classNames(this.props.className, this.props.modalClassName)}>
        { this.props.closeButton &&
          <button
            type="button"
            className="close"
            aria-label={label}
            onClick={this.props.onHide}>
            <span aria-hidden="true">
              &times;
            </span>
          </button>
        }
        { this.props.children }
      </div>
    );
  }
}

// used in liue of parent contexts right now to auto wire the close button
ModalHeader.__isModalHeader = true;

ModalHeader.propTypes = {
  /**
   * The 'aria-label' attribute provides an accessible label for the close button.
   * It is used for Assistive Technology when the label text is not readable.
   */
  'aria-label': React.PropTypes.string,

  /**
   * A css class applied to the Component
   */
  modalClassName: React.PropTypes.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: React.PropTypes.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically
   * be propagated up to the parent Modal `onHide`.
   */
  onHide: React.PropTypes.func
};

ModalHeader.defaultProps = {
  'aria-label': 'Close',
  modalClassName: 'modal-header',
  closeButton: false
};


export default ModalHeader;
