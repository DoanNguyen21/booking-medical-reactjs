import EventEmitter from 'events';

const _emitter = new EventEmitter();
_emitter.setMaxListeners(0);  //unlimit listrener

export const emitter = _emitter;