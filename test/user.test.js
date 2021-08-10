import { setUser, getUser } from '../src/User/user';

describe('Tests for getting default user name', () => {
  test('Returns Someone as a default name', () => {
    expect(getUser()).toBe('Someone');
  });

  test('Returns Someone as a default name', () => {
    expect(getUser()).not.toBe('Anyone');
  });
});

describe('Tests for setting a new user name', () => {
  test('Should return that the user name was succesfully stored', () => {
    expect(setUser('Henry')).toBe('User set to: Toyin');
  });

  test('Should return that the user name was succesfully stored', () => {
    expect(setUser('Henry')).not.toBe('User set to: Tobi');
  });
});

describe('Tests for getting new users name', () => {
  test('Should return Henry', () => {
    expect(getUser()).toBe('Toyin');
  });

  test('Should not return Henry', () => {
    expect(getUser()).not.toBe('Tobi');
  });
});
