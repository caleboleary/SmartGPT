
/* IMPORT */

import type {Callback, Disposer} from '../types';

/* MAIN */

class Interceptor {

  /* VARIABLES */

  private callbacks = new Set<Callback> ();

  /* CONSTRUCTOR */

  constructor () {

    window.addEventListener ( 'beforeunload', this.exit );

  }

  /* API */

  exit = (): void => {

    for ( const callback of this.callbacks ) {

      callback ();

    }

  };

  register = ( callback: Callback ): Disposer => {

    this.callbacks.add ( callback );

    return () => {

      this.callbacks.delete ( callback );

    };

  };

}

/* EXPORT */

export default new Interceptor ();
