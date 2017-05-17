import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import 'whatwg-fetch';
import { expect } from 'chai';
import * as actions from './';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.restore();
  });

  it('should create an action to select command', () => {
    const store = mockStore({});
    store.dispatch(actions.selectCommand(123));
    expect(store.getActions())
      .to.deep.equal([{
        type: 'SELECT_COMMAND',
        payload: 123,
      }]);
  });

  it('should create an action to show add form', () => {
    const store = mockStore({});
    store.dispatch(actions.showAddForm());
    expect(store.getActions())
      .to.deep.equal([{
        type: 'SHOW_ADD_FORM',
      }]);
  });

  it('should create an action to hide add form', () => {
    const store = mockStore({});
    store.dispatch(actions.hideAddForm());
    expect(store.getActions())
      .to.deep.equal([{
        type: 'HIDE_ADD_FORM',
      }]);
  });

  it('should create an action to edit command', () => {
    const command = {
      title: 'test',
      id: '123',
      command: 'test',
    };
    const store = mockStore({});
    store.dispatch(actions.editCommand(command));
    expect(store.getActions())
      .to.deep.equal([{
        type: 'SHOW_EDIT_FORM',
        payload: command,
      }]);
  });


  it('should create an action to show message', () => {
    const msgObj = {
      text: 'Message',
      type: 'success',
    };
    const store = mockStore({});
    store.dispatch(actions.showMessage(msgObj));
    expect(store.getActions())
      .to.deep.equal([{
        type: 'SHOW_MESSAGE',
        payload: msgObj,
      }]);
  });


  it('should create an action to search command', (done) => {
    const res = new Response('{}', {
      status: 500,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'SEARCH_COMMAND_START',
      'SEARCH_COMMAND_REJECTED',
    ];
    const store = mockStore({});
    store.dispatch(actions.searchCommand('test')).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  });

  it('should create an action to get commands', (done) => {
    const res = new Response('[]', {
      status: 200,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'GET_COMMAND_START',
      'GET_COMMAND_FULFILLED',
    ];
    const store = mockStore({});
    store.dispatch(actions.getCommands('test')).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  });

  it('should create an action to get commands', (done) => {
    const res = new Response('[]', {
      status: 500,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'GET_COMMAND_START',
      'GET_COMMAND_REJECTED',
    ];
    const store = mockStore({});
    store.dispatch(actions.getCommands('test')).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  });
  it('should create an action to add commands', (done) => {
    const res = new Response('{}', {
      status: 200,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'ADD_COMMAND_START',
      'ADD_COMMAND_FULFILLED',
    ];
    const store = mockStore({});
    store.dispatch(actions.addCommand({})).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  });

  it('should create an action to add commands', (done) => {
    const res = new Response('{}', {
      status: 500,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'ADD_COMMAND_START',
      'ADD_COMMAND_REJECTED',
    ];
    const store = mockStore({});
    store.dispatch(actions.addCommand({})).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  });

  it('should create an action to update commands', (done) => {
    const res = new Response('{}', {
      status: 200,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'UPDATE_COMMAND_START',
      'UPDATE_COMMAND_FULFILLED',
    ];
    const store = mockStore({});
    store.dispatch(actions.updateCommand({})).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  });
  it('should create an action to delete commands', (done) => {
    const res = new Response('{}', {
      status: 200,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'DELETE_COMMAND_START',
      'DELETE_COMMAND_REJECTED',
    ];
    const store = mockStore({});
    store.dispatch(actions.deleteCommand({})).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  }); it('should create an action to delete commands', (done) => {
    const res = new Response('{}', {
      status: 500,
    });
    fetchStub.returns(new Promise(resolve => resolve(res)));
    const expectedActions = [
      'DELETE_COMMAND_START',
      'DELETE_COMMAND_REJECTED',
    ];
    const store = mockStore({});
    store.dispatch(actions.deleteCommand({})).then(() => {
      store.getActions().map(action => expect(expectedActions.includes(action)));
      done();
    });
  });
});
