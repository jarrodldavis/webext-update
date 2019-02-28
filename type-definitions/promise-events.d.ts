declare module 'promise-events' {
  import event from 'events';

  export class EventEmitter extends event.EventEmitter {

  }

  export default EventEmitter;
}
