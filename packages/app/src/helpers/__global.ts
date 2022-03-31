import * as nodeBuffer from 'buffer';
import * as nodeProcess from 'process';

import 'eth-hooks/helpers/__global';

if (!global.hasOwnProperty('Buffer')) {
  (global as any).Buffer = nodeBuffer.Buffer;
}

(global as any).process = nodeProcess;

export { };
