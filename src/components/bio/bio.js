import React from 'react';
import PropTypes from 'prop-types';
import './bio.scss';

const Bio = () => (
  <div id="Bio" className="Bio" data-testid="Bio">
    <div className="bio-pic bio-content">
      <div className="bio-pic-content">
        <img src="https://media.licdn.com/dms/image/C5603AQFgU7JukkXBbw/profile-displayphoto-shrink_400_400/0/1609145713918?e=1705536000&v=beta&t=VqeYvdOZDJ2QI8NjqgZczpQC6EppHjDOhe08ndhuhFQ"></img>
      </div>
    </div>
    <div className="bio-text bio-content">
      <div className="bio-text-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis cras sed. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Egestas sed sed risus pretium quam vulputate. Dictumst vestibulum rhoncus est pellentesque elit. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et sollicitudin ac orci phasellus egestas tellus rutrum. Massa sapien faucibus et molestie ac. Lorem sed risus ultricies tristique nulla. Et leo duis ut diam. Enim blandit volutpat maecenas volutpat blandit. Facilisis gravida neque convallis a cras. Id velit ut tortor pretium. Facilisis volutpat est velit egestas dui.</p>
      </div>
    </div>
  </div>
);

Bio.propTypes = {};

Bio.defaultProps = {};

export default Bio;
