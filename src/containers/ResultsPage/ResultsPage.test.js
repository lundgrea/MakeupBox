import React from 'react';
import { shallow } from 'enzyme';
import { ResultsPage } from './ResultsPage';

describe('ResultsPage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ResultsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});



describe('mapStateToProps', () => {

})

describe('mapDispatchToProps', () => {
  
})





// describe("mapStateToProps", () => {
//   it("should return an object with the albums array", () => {
//     const mockState = {
//       albums: [{ album_name: "mirrorland", id: 1 }]
//     };
//     const expected = {
//       albums: [{ album_name: "mirrorland", id: 1 }]
//     };
//     const mappedProps = mapStateToProps(mockState);

//     expect(mappedProps).toEqual(expected);
//   });

//   it("should return an object with a user object", () => {
//     const mockState = {
//       user: mockUser
//     };
//     const expected = {
//       user: mockUser
//     };

//     const mappedProps = mapStateToProps(mockState);
//     expect(mappedProps).toEqual(expected);
//   });

//   it("should return an array of favorite album objects", () => {
//     const mockState = {
//       favorites: mockAlbums
//     };
//     const expected = {
//       favorites: mockAlbums
//     };
//     const mappedProps = mapStateToProps(mockState);
//     expect(mappedProps).toEqual(expected);
//   });
// });

// describe("mapDispatchToProps", () => {
//   it("calls dispatch with an toggleFavorite action", () => {
//     const mockDispatch = jest.fn();
//     const actionToDispatch = toggleFavorite(1);
//     const mappedProps = mapDispatchToProps(mockDispatch);
//     mappedProps.toggleFavorite(1);

//     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
//   });
// });
// });
