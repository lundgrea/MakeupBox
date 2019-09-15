import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';
import { MemoryRouter } from "react-router";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Quiz } from '../Quiz/Quiz'
import { ResultsPage } from '../ResultsPage/ResultsPage'


describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});


describe('Router', () => {
  it('should show the Main page when nothing is selected', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });
  
  it('should show the quiz page when Start Quiz is selected', () => {
    const mockStore = configureStore([])
    const props = {
      hasErrored: jest.fn(),
      isLoading: jest.fn(),
      results: jest.fn(),
      responses: jest.fn()
    };
    const storeInstance = mockStore(props)
    const wrapper = mount(<Provider store={storeInstance}><MemoryRouter initialEntries={['/quiz']}><App></App></MemoryRouter></Provider>)
    expect(wrapper.find(Quiz)).toHaveLength(1)
    });

  it('should show the results page once the quiz has been submitted', () => {
    const mockStore = configureStore([])
    const props = {
      hasErrored: jest.fn(),
      isLoading: jest.fn(),
      results: jest.fn(),
      responses: jest.fn()
    };
    const storeInstance = mockStore(props)
    const wrapper = mount(<Provider store={storeInstance}><MemoryRouter initialEntries={['/results']}><App></App></MemoryRouter></Provider>)
    expect(wrapper.find(ResultsPage)).toHaveLength(1)
  });

  it('should not show the results page once the Start Quiz button has been pressed', () => {
    const mockStore = configureStore([])
    const props = {
      hasErrored: jest.fn(),
      isLoading: jest.fn(),
      results: jest.fn(),
      responses: jest.fn()
    };
    const storeInstance = mockStore(props)
    const wrapper = mount(<Provider store={storeInstance}><MemoryRouter initialEntries={['/quiz']}><App></App></MemoryRouter></Provider>)
    expect(wrapper.find(ResultsPage)).toHaveLength(0)
  });

  it('should not show the quiz page once the submit quiz button has been pressed', () => {
    const mockStore = configureStore([])
    const props = {
      hasErrored: jest.fn(),
      isLoading: jest.fn(),
      results: jest.fn(),
      responses: jest.fn()
    };
    const storeInstance = mockStore(props)
    const wrapper = mount(<Provider store={storeInstance}><MemoryRouter initialEntries={['/results']}><App></App></MemoryRouter></Provider>)
    expect(wrapper.find(Quiz)).toHaveLength(0)
  });

  it('should not show the quiz or results page once the home button has been pressed', () => {
    const mockStore = configureStore([])
    const props = {
      hasErrored: jest.fn(),
      isLoading: jest.fn(),
      results: jest.fn(),
      responses: jest.fn()
    };
    const storeInstance = mockStore(props)
    const wrapper = mount(<Provider store={storeInstance}><MemoryRouter initialEntries={['/']}><App></App></MemoryRouter></Provider>)
    expect(wrapper.find(Quiz)).toHaveLength(0)
    expect(wrapper.find(ResultsPage)).toHaveLength(0)
  });

  it('should show the home page if some random url is entered', () => {
    const mockStore = configureStore([])
    const props = {
      hasErrored: jest.fn(),
      isLoading: jest.fn(),
      results: jest.fn(),
      responses: jest.fn()
    };
    const storeInstance = mockStore(props)
    const wrapper = mount(<Provider store={storeInstance}><MemoryRouter initialEntries={['/yolo']}><App></App></MemoryRouter></Provider>)
    expect(wrapper.find(App)).toHaveLength(1)
  });

  it('should not show the quiz or results page if some random url is entered', () => {
    const mockStore = configureStore([])
    const props = {
      hasErrored: jest.fn(),
      isLoading: jest.fn(),
      results: jest.fn(),
      responses: jest.fn()
    };
    const storeInstance = mockStore(props)
    const wrapper = mount(<Provider store={storeInstance}><MemoryRouter initialEntries={['/yolo']}><App></App></MemoryRouter></Provider>)
    expect(wrapper.find(Quiz)).toHaveLength(0)
    expect(wrapper.find(ResultsPage)).toHaveLength(0)  
  });
});

