import Generator from '../../generator';

export default class Thing extends Generator {
  // @param scope is the world/country/town, etc. the thing is within that governs its langauge and concepts.
  constructor(scope, { identity = 'nothing', x = 0, y = 0, type = 'none', status = 'none' }) {
    super(scope.seedValue);

    this.location = {
      scope: scope,
      x: x,
      y: y
    }
    this.thing = {
      identity: identity,
      type: type,
      status: status
    }
  }
}
