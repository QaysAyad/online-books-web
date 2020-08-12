import React from 'react';
import PropTypes from 'prop-types';

function BookImage({ isBooksSelected }) {
  const pinkColor="#fee4cb";
  const grayColor="#e2e8f0";
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="d-inline"
      >
        <path
          d="M15.7613 2.8125L3.23766 6.26766C3.23766 6.26766 0.9375 6.20297 0.9375 8.64609C0.9375 9.65437 1.38469 10.4058 1.38469 10.4058L10.9256 26.363C11.8378 27.8161 13.7752 26.9063 13.7752 26.9063L28.4053 19.7789L27.8578 19.2234C27.7289 18.5564 27.6539 17.3213 28.5595 16.4016C28.5797 16.3809 28.5834 16.3528 28.5942 16.327L29.0625 16.1391L15.7613 2.8125ZM4.69734 6.83719L15.4838 3.86156L27.3975 15.7978L13.7142 21.2981L4.69734 6.83719V6.83719ZM27.3806 17.8786C27.3502 18.0942 27.3347 18.3042 27.338 18.5011L17.7338 23.0597L27.3722 18.9694C27.3816 19.0439 27.39 19.1189 27.4017 19.1864L15.09 25.133L27.4988 19.6298L27.5063 19.6589L13.7752 26.2275C13.7686 26.2317 13.1419 26.565 12.5137 26.565C11.8931 26.565 11.5064 26.2463 11.3302 25.5909C10.8769 23.9072 13.4522 22.9528 13.4911 22.9388L27.7331 16.777C27.6309 16.9645 27.5602 17.1553 27.5011 17.3456L18.4603 21.6014L27.3806 17.8786"
          fill={`${isBooksSelected ? pinkColor : grayColor}`}
        />
        <path
          d="M16.1499 5.85559L6.8949 8.59215L9.1524 12.1434L18.7107 8.64325L16.1499 5.85559Z"
          fill={`${isBooksSelected ? pinkColor : grayColor}`}
        />
      </svg>
    </>
  );
}
BookImage.propTypes = {
  isBooksSelected: PropTypes.bool,
};

export default BookImage;
