// This needs to be global to avoid TS2403 in case lib.dom.d.ts is present in the same build
interface Console {
    Console: NodeJS.ConsoleConstructor;
    /**
     * A simple assertion test that verifies whether `value` is truthy.
     * If it is not, an `AssertionError` is thrown.
     * If provided, the error `message` is formatted using `util.format()` and used as the error message.
     */
    assert(value: any, message?: string, ...optionalParams: any[]): void;
    /**
     * When `stdout` is a TTY, calling `console.clear()` will attempt to clear the TTY.
     * When `stdout` is not a TTY, this method does nothing.
     */
    clear(): void;
    /**
     * Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `console.count()` has been called with the given `label`.
     */
    count(label?: string): void;
    /**
     * Resets the internal counter specific to `label`.
     */
    countReset(label?: string): void;
    /**
     * The `console.debug()` function is an alias for {@link console.log}.
     */
    debug(message?: any, ...optionalParams: any[]): void;
    /**
     * Uses {@link util.inspect} on `obj` and prints the resulting string to `stdout`.
     * This function bypasses any custom `inspect()` function defined on `obj`.
     */
    dir(obj: any, options?: NodeJS.InspectOptions): void;
    /**
     * This method calls {@link console.log} passing it the arguments received. Please note that this method does not produce any XML formatting
     */
    dirxml(...data: any[]): void;
    /**
     * Prints to `stderr` with newline.
     */
    error(message?: any, ...optionalParams: any[]): void;
    /**
     * Increases indentation of subsequent lines by two spaces.
     * If one or more `label`s are provided, those are printed first without the additional indentation.
     */
    group(...label: any[]): void;
    /**
     * The `console.groupCollapsed()` function is an alias for {@link console.group}.
     */
    groupCollapsed(...label: any[]): void;
    /**
     * Decreases indentation of subsequent lines by two spaces.
     */
    groupEnd(): void;
    /**
     * The {@link console.info} function is an alias for {@link console.log}.
     */
    info(message?: any, ...optionalParams: any[]): void;
    /**
     * Prints to `stdout` with newline.
     */
    log(message?: any, ...optionalParams: any[]): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  Prints to `stdout` the array `array` formatted as a table.
     */
    table(tabularData: any, properties?: ReadonlyArray<string>): void;
    /**
     * Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.
     */
    time(label?: string): void;
    /**
     * Stops a timer that was previously started by calling {@link console.time} and prints the result to `stdout`.
     */
    timeEnd(label?: string): void;
    /**
     * For a timer that was previously started by calling {@link console.time}, prints the elapsed time and other `data` arguments to `stdout`.
     */
    timeLog(label?: string, ...data: any[]): void;
    /**
     * Prints to `stderr` the string 'Trace :', followed by the {@link util.format} formatted message and stack trace to the current position in the code.
     */
    trace(message?: any, ...optionalParams: any[]): void;
    /**
     * The {@link console.warn} function is an alias for {@link console.error}.
     */
    warn(message?: any, ...optionalParams: any[]): void;

    // --- Inspector mode only ---
    /**
     * This method does not display anything unless used in the inspector.
     *  The console.markTimeline() method is the deprecated form of console.timeStamp().
     *
     * @deprecated Use console.timeStamp() instead.
     */
    markTimeline(label?: string): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  Starts a JavaScript CPU profile with an optional label.
     */
    profile(label?: string): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  Stops the current JavaScript CPU profiling session if one has been started and prints the report to the Profiles panel of the inspector.
     */
    profileEnd(label?: string): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  Adds an event with the label `label` to the Timeline panel of the inspector.
     */
    timeStamp(label?: string): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  The console.timeline() method is the deprecated form of console.time().
     *
     * @deprecated Use console.time() instead.
     */
    timeline(label?: string): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  The console.timelineEnd() method is the deprecated form of console.timeEnd().
     *
     * @deprecated Use console.timeEnd() instead.
     */
    timelineEnd(label?: string): void;
}

interface Error {
    stack?: string | undefined;
}

// Declare "static" methods in Error
interface ErrorConstructor {
    /** Create .stack property on a target object */
    captureStackTrace(targetObject: Object, constructorOpt?: Function): void;

    /**
     * Optional override for formatting stack traces
     *
     * @see https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces
     */
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;

    stackTraceLimit: number;
}

interface SymbolConstructor {
    readonly observable: symbol;
}

// Node.js ESNEXT support
interface String {
    /** Removes whitespace from the left end of a string. */
    trimLeft(): string;
    /** Removes whitespace from the right end of a string. */
    trimRight(): string;

    /** Returns a copy with leading whitespace removed. */
    trimStart(): string;
    /** Returns a copy with trailing whitespace removed. */
    trimEnd(): string;
}

interface ImportMeta {
    url: string;
}

/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/
declare var process: NodeJS.Process;
declare var console: Console;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
declare namespace setTimeout {
    function __promisify__(ms: number): Promise<void>;
    function __promisify__<T>(ms: number, value: T): Promise<T>;
}
declare function clearTimeout(timeoutId: NodeJS.Timeout): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
declare function clearInterval(intervalId: NodeJS.Timeout): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate;
declare namespace setImmediate {
    function __promisify__(): Promise<void>;
    function __promisify__<T>(value: T): Promise<T>;
}
declare function clearImmediate(immediateId: NodeJS.Immediate): void;

declare function queueMicrotask(callback: () => void): void;

// TODO: change to `type NodeRequireFunction = (id: string) => any;` in next mayor version.
interface NodeRequireFunction {
    (id: string): any;
}

interface NodeRequireCache {
    [path: string]: NodeModule;
}

interface NodeRequire extends NodeRequireFunction {
    resolve: RequireResolve;
    cache: NodeRequireCache;
    /**
     * @deprecated
     */
    extensions: NodeExtensions;
    main: NodeModule | undefined;
}

interface RequireResolve {
    (id: string, options?: { paths?: string[] | undefined; }): string;
    paths(request: string): string[] | null;
}

interface NodeExtensions {
    '.js': (m: NodeModule, filename: string) => any;
    '.json': (m: NodeModule, filename: string) => any;
    '.node': (m: NodeModule, filename: string) => any;
    [ext: string]: (m: NodeModule, filename: string) => any;
}

declare var require: NodeRequire;

interface NodeModule {
    exports: any;
    require: NodeRequireFunction;
    id: string;
    filename: string;
    loaded: boolean;
    /** @deprecated since 12.19.0 Please use `require.main` and `module.children` instead. */
    parent: NodeModule | null | undefined;
    children: NodeModule[];
    /**
     * @since 11.14.0
     *
     * The directory name of the module. This is usually the same as the path.dirname() of the module.id.
     */
    path: string;
    paths: string[];
}

declare var module: NodeModule;

// Same as module.exports
declare var exports: any;

// Buffer class
type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex";

interface Buffer {
    constructor: typeof Buffer;
    readBigUInt64BE(offset?: number): bigint;
    /**
     * @alias Buffer.readBigUInt64BE
     * @since v12.19.0
     */
    readBigUint64BE(offset?: number): bigint;
    readBigUInt64LE(offset?: number): bigint;
    /**
     * @alias Buffer.readBigUInt64LE
     * @since v12.19.0
     */
    readBigUint64LE(offset?: number): bigint;
    readBigInt64BE(offset?: number): bigint;
    readBigInt64LE(offset?: number): bigint;
    writeBigInt64BE(value: bigint, offset?: number): number;
    writeBigInt64LE(value: bigint, offset?: number): number;
    writeBigUInt64BE(value: bigint, offset?: number): number;
    /**
     * @alias Buffer.writeBigUInt64BE
     * @since v12.19.0
     */
    writeBigUint64BE(value: bigint, offset?: number): number;
    writeBigUInt64LE(value: bigint, offset?: number): number;
    /**
     * @alias Buffer.writeBigUInt64LE
     * @since v12.19.0
     */
    writeBigUint64LE(value: bigint, offset?: number): number;
}

/**
 * Raw data is stored in instances of the Buffer class.
 * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
 * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
 */
declare class Buffer extends Uint8Array {
    /**
     * Allocates a new buffer containing the given {str}.
     *
     * @param str String to store in buffer.
     * @param encoding encoding to use, optional.  Default is 'utf8'
     * @deprecated since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.
     */
    constructor(str: string, encoding?: BufferEncoding);
    /**
     * Allocates a new buffer of {size} octets.
     *
     * @param size count of octets to allocate.
     * @deprecated since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).
     */
    constructor(size: number);
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
     */
    constructor(array: Uint8Array);
    /**
     * Produces a Buffer backed by the same allocated memory as
     * the given {ArrayBuffer}/{SharedArrayBuffer}.
     *
     *
     * @param arrayBuffer The ArrayBuffer with which to share memory.
     * @deprecated since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.
     */
    constructor(arrayBuffer: ArrayBuffer | SharedArrayBuffer);
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
     */
    constructor(array: ReadonlyArray<any>);
    /**
     * Copies the passed {buffer} data onto a new {Buffer} instance.
     *
     * @param buffer The buffer to copy.
     * @deprecated since v10.0.0 - Use `Buffer.from(buffer)` instead.
     */
    constructor(buffer: Buffer);
    /**
     * When passed a reference to the .buffer property of a TypedArray instance,
     * the newly created Buffer will share the same allocated memory as the TypedArray.
     * The optional {byteOffset} and {length} arguments specify a memory range
     * within the {arrayBuffer} that will be shared by the Buffer.
     *
     * @param arrayBuffer The .buffer property of any TypedArray or a new ArrayBuffer()
     */
    static from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer;
    /**
     * Creates a new Buffer using the passed {data}
     * @param data data to create a new Buffer
     */
    static from(data: ReadonlyArray<number>): Buffer;
    static from(data: Uint8Array): Buffer;
    /**
     * Creates a new buffer containing the coerced value of an object
     * A `TypeError` will be thrown if {obj} has not mentioned methods or is not of other type appropriate for `Buffer.from()` variants.
     * @param obj An object supporting `Symbol.toPrimitive` or `valueOf()`.
     */
    static from(obj: { valueOf(): string | object } | { [Symbol.toPrimitive](hint: 'string'): string }, byteOffset?: number, length?: number): Buffer;
    /**
     * Creates a new Buffer containing the given JavaScript string {str}.
     * If provided, the {encoding} parameter identifies the character encoding.
     * If not provided, {encoding} defaults to 'utf8'.
     */
    static from(str: string, encoding?: BufferEncoding): Buffer;
    /**
     * Creates a new Buffer using the passed {data}
     * @param values to create a new Buffer
     */
    static of(...items: number[]): Buffer;
    /**
     * Returns true if {obj} is a Buffer
     *
     * @param obj object to test.
     */
    static isBuffer(obj: any): obj is Buffer;
    /**
     * Returns true if {encoding} is a valid encoding argument.
     * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
     *
     * @param encoding string to test.
     */
    static isEncoding(encoding: string): encoding is BufferEncoding;
    /**
     * Gives the actual byte length of a string. encoding defaults to 'utf8'.
     * This is not the same as String.prototype.length since that returns the number of characters in a string.
     *
     * @param string string to test.
     * @param encoding encoding used to evaluate (defaults to 'utf8')
     */
    static byteLength(
        string: string | NodeJS.ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
        encoding?: BufferEncoding
    ): number;
    /**
     * Returns a buffer which is the result of concatenating all the buffers in the list together.
     *
     * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
     * If the list has exactly one item, then the first item of the list is returned.
     * If the list has more than one item, then a new Buffer is created.
     *
     * @param list An array of Buffer objects to concatenate
     * @param totalLength Total length of the buffers when concatenated.
     *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
     */
    static concat(list: ReadonlyArray<Uint8Array>, totalLength?: number): Buffer;
    /**
     * The same as buf1.compare(buf2).
     */
    static compare(buf1: Uint8Array, buf2: Uint8Array): number;
    /**
     * Allocates a new buffer of {size} octets.
     *
     * @param size count of octets to allocate.
     * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
     *    If parameter is omitted, buffer will be filled with zeros.
     * @param encoding encoding used for call to buf.fill while initalizing
     */
    static alloc(size: number, fill?: string | Buffer | number, encoding?: BufferEncoding): Buffer;
    /**
     * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
     * of the newly created Buffer are unknown and may contain sensitive data.
     *
     * @param size count of octets to allocate
     */
    static allocUnsafe(size: number): Buffer;
    /**
     * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
     * of the newly created Buffer are unknown and may contain sensitive data.
     *
     * @param size count of octets to allocate
     */
    static allocUnsafeSlow(size: number): Buffer;
    /**
     * This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.
     */
    static poolSize: number;

    write(string: string, encoding?: BufferEncoding): number;
    write(string: string, offset: number, encoding?: BufferEncoding): number;
    write(string: string, offset: number, length: number, encoding?: BufferEncoding): number;
    toString(encoding?: string, start?: number, end?: number): string;
    toJSON(): { type: 'Buffer'; data: number[] };
    equals(otherBuffer: Uint8Array): boolean;
    compare(
        otherBuffer: Uint8Array,
        targetStart?: number,
        targetEnd?: number,
        sourceStart?: number,
        sourceEnd?: number
    ): number;
    copy(targetBuffer: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    /**
     * Returns a new `Buffer` that references **the same memory as the original**, but offset and cropped by the start and end indices.
     *
     * This method is incompatible with `Uint8Array#slice()`, which returns a copy of the original memory.
     *
     * @param begin Where the new `Buffer` will start. Default: `0`.
     * @param end Where the new `Buffer` will end (not inclusive). Default: `buf.length`.
     */
    slice(begin?: number, end?: number): Buffer;
    /**
     * Returns a new `Buffer` that references **the same memory as the original**, but offset and cropped by the start and end indices.
     *
     * This method is compatible with `Uint8Array#subarray()`.
     *
     * @param begin Where the new `Buffer` will start. Default: `0`.
     * @param end Where the new `Buffer` will end (not inclusive). Default: `buf.length`.
     */
    subarray(begin?: number, end?: number): Buffer;
    writeUIntLE(value: number, offset: number, byteLength: number): number;
    /**
     * @alias Buffer.writeUIntLE
     * @since v12.19.0
     */
    writeUintLE(value: number, offset: number, byteLength: number): number;
    writeUIntBE(value: number, offset: number, byteLength: number): number;
    /**
     * @alias Buffer.writeUIntBE
     * @since v12.19.0
     */
    writeUintBE(value: number, offset: number, byteLength: number): number;
    writeIntLE(value: number, offset: number, byteLength: number): number;
    writeIntBE(value: number, offset: number, byteLength: number): number;
    readUIntLE(offset: number, byteLength: number): number;
    /**
     * @alias Buffer.readUIntLE
     * @since v12.19.0
     */
    readUintLE(offset: number, byteLength: number): number;
    readUIntBE(offset: number, byteLength: number): number;
    /**
     * @alias Buffer.readUIntBE
     * @since v12.19.0
     */
    readUintBE(offset: number, byteLength: number): number;
    readIntLE(offset: number, byteLength: number): number;
    readIntBE(offset: number, byteLength: number): number;
    readUInt8(offset?: number): number;
    /**
     * @alias Buffer.readUInt8
     * @since v12.19.0
     */
    readUint8(offset?: number): number;
    readUInt16LE(offset?: number): number;
    /**
     * @alias Buffer.readUInt16LE
     * @since v12.19.0
     */
    readUint16LE(offset?: number): number;
    readUInt16BE(offset?: number): number;
    /**
     * @alias Buffer.readUInt16BE
     * @since v12.19.0
     */
    readUint16BE(offset?: number): number;
    readUInt32LE(offset?: number): number;
    /**
     * @alias Buffer.readUInt32LE
     * @since v12.19.0
     */
    readUint32LE(offset?: number): number;
    readUInt32BE(offset?: number): number;
    /**
     * @alias Buffer.readUInt32BE
     * @since v12.19.0
     */
    readUint32BE(offset?: number): number;
    readInt8(offset?: number): number;
    readInt16LE(offset?: number): number;
    readInt16BE(offset?: number): number;
    readInt32LE(offset?: number): number;
    readInt32BE(offset?: number): number;
    readFloatLE(offset?: number): number;
    readDoubleLE(offset?: number): number;
    readDoubleBE(offset?: number): number;
    reverse(): this;
    swap16(): Buffer;
    swap32(): Buffer;
    swap64(): Buffer;
    writeUInt8(value: number, offset?: number): number;
    /**
     * @alias Buffer.writeUInt8
     * @since v12.19.0
     */
    writeUint8(value: number, offset?: number): number;
    writeUInt16LE(value: number, offset?: number): number;
    /**
     * @alias Buffer.writeUInt16LE
     * @since v12.19.0
     */
    writeUint16LE(value: number, offset?: number): number;
    writeUInt16BE(value: number, offset?: number): number;
    /**
     * @alias Buffer.writeUInt16BE
     * @since v12.19.0
     */
    writeUint16BE(value: number, offset?: number): number;
    writeUInt32LE(value: number, offset?: number): number;
    /**
     * @alias Buffer.writeUInt32LE
     * @since v12.19.0
     */
    writeUint32LE(value: number, offset?: number): number;
    writeUInt32BE(value: number, offset?: number): number;
    /**
     * @alias Buffer.writeUInt32BE
     * @since v12.19.0
     */
    writeUint32BE(value: number, offset?: number): number;
    writeInt8(value: number, offset?: number): number;
    writeInt16LE(value: number, offset?: number): number;
    writeInt16BE(value: number, offset?: number): number;
    writeInt32LE(value: number, offset?: number): number;
    writeInt32BE(value: number, offset?: number): number;
    writeFloatLE(value: number, offset?: number): number;
    writeFloatBE(value: number, offset?: number): number;
    writeDoubleLE(value: number, offset?: number): number;
    writeDoubleBE(value: number, offset?: number): number;

    fill(value: string | Uint8Array | number, offset?: number, end?: number, encoding?: BufferEncoding): this;

    indexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
    lastIndexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
    entries(): IterableIterator<[number, number]>;
    includes(value: string | number | Buffer, byteOffset?: number, encoding?: BufferEncoding): boolean;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}

/*----------------------------------------------*
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
*-----------------------------------------------*/
declare namespace NodeJS {
    interface InspectOptions {
        /**
         * If set to `true`, getters are going to be
         * inspected as well. If set to `'get'` only getters without setter are going
         * to be inspected. If set to `'set'` only getters having a corresponding
         * setter are going to be inspected. This might cause side effects depending on
         * the getter function.
         * @default `false`
         */
        getters?: 'get' | 'set' | boolean | undefined;
        showHidden?: boolean | undefined;
        /**
         * @default 2
         */
        depth?: number | null | undefined;
        colors?: boolean | undefined;
        customInspect?: boolean | undefined;
        showProxy?: boolean | undefined;
        maxArrayLength?: number | null | undefined;
        breakLength?: number | undefined;
        /**
         * Setting this to `false` causes each object key
         * to be displayed on a new line. It will also add new lines to text that is
         * longer than `breakLength`. If set to a number, the most `n` inner elements
         * are united on a single line as long as all properties fit into
         * `breakLength`. Short array elements are also grouped together. Note that no
         * text will be reduced below 16 characters, no matter the `breakLength` size.
         * For more information, see the example below.
         * @default `true`
         */
        compact?: boolean | number | undefined;
        sorted?: boolean | ((a: string, b: string) => number) | undefined;
    }

    interface ConsoleConstructorOptions {
        stdout: WritableStream;
        stderr?: WritableStream | undefined;
        ignoreErrors?: boolean | undefined;
        colorMode?: boolean | 'auto' | undefined;
        inspectOptions?: InspectOptions | undefined;
        /**
         * Set group indentation
         * @default 2
         */
        groupIndentation?: number | undefined;
    }

    interface ConsoleConstructor {
        prototype: Console;
        new(stdout: WritableStream, stderr?: WritableStream, ignoreErrors?: boolean): Console;
        new(options: ConsoleConstructorOptions): Console;
    }

    interface CallSite {
        /**
         * Value of "this"
         */
        getThis(): any;

        /**
         * Type of "this" as a string.
         * This is the name of the function stored in the constructor field of
         * "this", if available.  Otherwise the object's [[Class]] internal
         * property.
         */
        getTypeName(): string | null;

        /**
         * Current function
         */
        getFunction(): Function | undefined;

        /**
         * Name of the current function, typically its name property.
         * If a name property is not available an attempt will be made to try
         * to infer a name from the function's context.
         */
        getFunctionName(): string | null;

        /**
         * Name of the property [of "this" or one of its prototypes] that holds
         * the current function
         */
        getMethodName(): string | null;

        /**
         * Name of the script [if this function was defined in a script]
         */
        getFileName(): string | null;

        /**
         * Current line number [if this function was defined in a script]
         */
        getLineNumber(): number | null;

        /**
         * Current column number [if this function was defined in a script]
         */
        getColumnNumber(): number | null;

        /**
         * A call site object representing the location where eval was called
         * [if this function was created using a call to eval]
         */
        getEvalOrigin(): string | undefined;

        /**
         * Is this a toplevel invocation, that is, is "this" the global object?
         */
        isToplevel(): boolean;

        /**
         * Does this call take place in code defined by a call to eval?
         */
        isEval(): boolean;

        /**
         * Is this call in native V8 code?
         */
        isNative(): boolean;

        /**
         * Is this a constructor call?
         */
        isConstructor(): boolean;
    }

    interface ErrnoException extends Error {
        errno?: number | undefined;
        code?: string | undefined;
        path?: string | undefined;
        syscall?: string | undefined;
    }

    class EventEmitter {
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;
        removeAllListeners(event?: string | symbol): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        emit(event: string | symbol, ...args: any[]): boolean;
        listenerCount(type: string | symbol): number;
        // Added in Node 6...
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
        eventNames(): Array<string | symbol>;
    }

    interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): string | Buffer;
        setEncoding(encoding: string): this;
        pause(): this;
        resume(): this;
        isPaused(): boolean;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean | undefined; }): T;
        unpipe(destination?: WritableStream): this;
        unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void;
        wrap(oldStream: ReadableStream): this;
        [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer>;
    }

    interface WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Uint8Array | string, cb?: (err?: Error | null) => void): boolean;
        write(str: string, encoding?: string, cb?: (err?: Error | null) => void): boolean;
        end(cb?: () => void): this;
        end(data: string | Uint8Array, cb?: () => void): this;
        end(str: string, encoding?: string, cb?: () => void): this;
    }

    interface ReadWriteStream extends ReadableStream, WritableStream { }

    interface Domain extends EventEmitter {
        run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
        add(emitter: EventEmitter | Timer): void;
        remove(emitter: EventEmitter | Timer): void;
        bind<T extends Function>(cb: T): T;
        intercept<T extends Function>(cb: T): T;

        addListener(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        removeListener(event: string, listener: (...args: any[]) => void): this;
        removeAllListeners(event?: string): this;
    }

    interface MemoryUsage {
        rss: number;
        heapTotal: number;
        heapUsed: number;
        external: number;
    }

    interface CpuUsage {
        user: number;
        system: number;
    }

    interface ProcessRelease {
        name: string;
        sourceUrl?: string | undefined;
        headersUrl?: string | undefined;
        libUrl?: string | undefined;
        lts?: string | undefined;
    }

    interface ProcessVersions {
        http_parser: string;
        node: string;
        v8: string;
        ares: string;
        uv: string;
        zlib: string;
        modules: string;
        openssl: string;
    }

    type Platform = 'aix'
        | 'android'
        | 'darwin'
        | 'freebsd'
        | 'linux'
        | 'openbsd'
        | 'sunos'
        | 'win32'
        | 'cygwin'
        | 'netbsd';

    type Signals =
        "SIGABRT" | "SIGALRM" | "SIGBUS" | "SIGCHLD" | "SIGCONT" | "SIGFPE" | "SIGHUP" | "SIGILL" | "SIGINT" | "SIGIO" |
        "SIGIOT" | "SIGKILL" | "SIGPIPE" | "SIGPOLL" | "SIGPROF" | "SIGPWR" | "SIGQUIT" | "SIGSEGV" | "SIGSTKFLT" |
        "SIGSTOP" | "SIGSYS" | "SIGTERM" | "SIGTRAP" | "SIGTSTP" | "SIGTTIN" | "SIGTTOU" | "SIGUNUSED" | "SIGURG" |
        "SIGUSR1" | "SIGUSR2" | "SIGVTALRM" | "SIGWINCH" | "SIGXCPU" | "SIGXFSZ" | "SIGBREAK" | "SIGLOST" | "SIGINFO";

    type MultipleResolveType = 'resolve' | 'reject';

    type BeforeExitListener = (code: number) => void;
    type DisconnectListener = () => void;
    type ExitListener = (code: number) => void;
    type RejectionHandledListener = (promise: Promise<any>) => void;
    type UncaughtExceptionListener = (error: Error) => void;
    type UnhandledRejectionListener = (reason: {} | null | undefined, promise: Promise<any>) => void;
    type WarningListener = (warning: Error) => void;
    type MessageListener = (message: any, sendHandle: any) => void;
    type SignalsListener = (signal: Signals) => void;
    type NewListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;
    type RemoveListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;
    type MultipleResolveListener = (type: MultipleResolveType, promise: Promise<any>, value: any) => void;

    interface Socket extends ReadWriteStream {
        isTTY?: true | undefined;
    }

    interface ProcessEnv {
        [key: string]: string | undefined;
    }

    interface HRTime {
        (time?: [number, number]): [number, number];
        bigint(): bigint;
    }

    interface ProcessReport {
        /**
         * Directory where the report is written.
         * working directory of the Node.js process.
         * @default '' indicating that reports are written to the current
         */
        directory: string;

        /**
         * Filename where the report is written.
         * The default value is the empty string.
         * @default '' the output filename will be comprised of a timestamp,
         * PID, and sequence number.
         */
        filename: string;

        /**
         * Returns a JSON-formatted diagnostic report for the running process.
         * The report's JavaScript stack trace is taken from err, if present.
         */
        getReport(err?: Error): string;

        /**
         * If true, a diagnostic report is generated on fatal errors,
         * such as out of memory errors or failed C++ assertions.
         * @default false
         */
        reportOnFatalError: boolean;

        /**
         * If true, a diagnostic report is generated when the process
         * receives the signal specified by process.report.signal.
         * @default false
         */
        reportOnSignal: boolean;

        /**
         * If true, a diagnostic report is generated on uncaught exception.
         * @default false
         */
        reportOnUncaughtException: boolean;

        /**
         * The signal used to trigger the creation of a diagnostic report.
         * @default 'SIGUSR2'
         */
        signal: Signals;

        /**
         * Writes a diagnostic report to a file. If filename is not provided, the default filename
         * includes the date, time, PID, and a sequence number.
         * The report's JavaScript stack trace is taken from err, if present.
         *
         * @param fileName Name of the file where the report is written.
         * This should be a relative path, that will be appended to the directory specified in
         * `process.report.directory`, or the current working directory of the Node.js process,
         * if unspecified.
         * @param error A custom error used for reporting the JavaScript stack.
         * @return Filename of the generated report.
         */
        writeReport(fileName?: string): string;
        writeReport(error?: Error): string;
        writeReport(fileName?: string, err?: Error): string;
    }

    interface ResourceUsage {
        fsRead: number;
        fsWrite: number;
        involuntaryContextSwitches: number;
        ipcReceived: number;
        ipcSent: number;
        majorPageFault: number;
        maxRSS: number;
        minorPageFault: number;
        sharedMemorySize: number;
        signalsCount: number;
        swappedOut: number;
        systemCPUTime: number;
        unsharedDataSize: number;
        unsharedStackSize: number;
        userCPUTime: number;
        voluntaryContextSwitches: number;
    }

    interface EmitWarningOptions {
        /**
         * When `warning` is a `string`, `type` is the name to use for the _type_ of warning being emitted.
         *
         * @default 'Warning'
         */
        type?: string | undefined;

        /**
         * A unique identifier for the warning instance being emitted.
         */
        code?: string | undefined;

        /**
         * When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace.
         *
         * @default process.emitWarning
         */
        ctor?: Function | undefined;

        /**
         * Additional text to include with the error.
         */
        detail?: string | undefined;
    }

    interface Process extends EventEmitter {
        /**
         * Can also be a tty.WriteStream, not typed due to limitation.s
         */
        stdout: WriteStream;
        /**
         * Can also be a tty.WriteStream, not typed due to limitation.s
         */
        stderr: WriteStream;
        stdin: ReadStream;
        openStdin(): Socket;
        argv: string[];
        argv0: string;
        execArgv: string[];
        execPath: string;
        abort(): never;
        chdir(directory: string): void;
        cwd(): string;
        debugPort: number;

        /**
         * The `process.emitWarning()` method can be used to emit custom or application specific process warnings.
         *
         * These can be listened for by adding a handler to the `'warning'` event.
         *
         * @param warning The warning to emit.
         * @param type When `warning` is a `string`, `type` is the name to use for the _type_ of warning being emitted. Default: `'Warning'`.
         * @param code A unique identifier for the warning instance being emitted.
         * @param ctor When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace. Default: `process.emitWarning`.
         */
        emitWarning(warning: string | Error, ctor?: Function): void;
        emitWarning(warning: string | Error, type?: string, ctor?: Function): void;
        emitWarning(warning: string | Error, type?: string, code?: string, ctor?: Function): void;
        emitWarning(warning: string | Error, options?: EmitWarningOptions): void;

        env: ProcessEnv;
        exit(code?: number): never;
        exitCode?: number | undefined;
        getgid(): number;
        setgid(id: number | string): void;
        getuid(): number;
        setuid(id: number | string): void;
        geteuid(): number;
        seteuid(id: number | string): void;
        getegid(): number;
        setegid(id: number | string): void;
        getgroups(): number[];
        setgroups(groups: ReadonlyArray<string | number>): void;
        setUncaughtExceptionCaptureCallback(cb: ((err: Error) => void) | null): void;
        hasUncaughtExceptionCaptureCallback(): boolean;
        version: string;
        versions: ProcessVersions;
        config: {
            target_defaults: {
                cflags: any[];
                default_configuration: string;
                defines: string[];
                include_dirs: string[];
                libraries: string[];
            };
            variables: {
                clang: number;
                host_arch: string;
                node_install_npm: boolean;
                node_install_waf: boolean;
                node_prefix: string;
                node_shared_openssl: boolean;
                node_shared_v8: boolean;
                node_shared_zlib: boolean;
                node_use_dtrace: boolean;
                node_use_etw: boolean;
                node_use_openssl: boolean;
                target_arch: string;
                v8_no_strict_aliasing: number;
                v8_use_snapshot: boolean;
                visibility: string;
            };
        };
        kill(pid: number, signal?: string | number): true;
        pid: number;
        ppid: number;
        title: string;
        arch: string;
        platform: Platform;
        mainModule?: NodeModule | undefined;
        memoryUsage(): MemoryUsage;
        cpuUsage(previousValue?: CpuUsage): CpuUsage;
        nextTick(callback: Function, ...args: any[]): void;
        release: ProcessRelease;
        features: {
            inspector: boolean;
            debug: boolean;
            uv: boolean;
            ipv6: boolean;
            tls_alpn: boolean;
            tls_sni: boolean;
            tls_ocsp: boolean;
            tls: boolean;
        };
        /**
         * @deprecated since v12.19.0 - Calling process.umask() with no argument causes
         * the process-wide umask to be written twice. This introduces a race condition between threads,
         * and is a potential security vulnerability. There is no safe, cross-platform alternative API.
         */
        umask(): number;
        /**
         * Can only be set if not in worker thread.
         */
        umask(mask: string | number): number;
        uptime(): number;
        hrtime: HRTime;
        domain: Domain;

        // Worker
        send?(message: any, sendHandle?: any, options?: { swallowErrors?: boolean | undefined}, callback?: (error: Error | null) => void): boolean;
        disconnect(): void;
        connected: boolean;

        /**
         * The `process.allowedNodeEnvironmentFlags` property is a special,
         * read-only `Set` of flags allowable within the [`NODE_OPTIONS`][]
         * environment variable.
         */
        allowedNodeEnvironmentFlags: ReadonlySet<string>;

        /**
         * Only available with `--experimental-report`
         */
        report?: ProcessReport | undefined;

        resourceUsage(): ResourceUsage;

        /**
         * EventEmitter
         *   1. beforeExit
         *   2. disconnect
         *   3. exit
         *   4. message
         *   5. rejectionHandled
         *   6. uncaughtException
         *   7. unhandledRejection
         *   8. warning
         *   9. message
         *  10. <All OS Signals>
         *  11. newListener/removeListener inherited from EventEmitter
         */
        addListener(event: "beforeExit", listener: BeforeExitListener): this;
        addListener(event: "disconnect", listener: DisconnectListener): this;
        addListener(event: "exit", listener: ExitListener): this;
        addListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
        addListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        addListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        addListener(event: "warning", listener: WarningListener): this;
        addListener(event: "message", listener: MessageListener): this;
        addListener(event: Signals, listener: SignalsListener): this;
        addListener(event: "newListener", listener: NewListenerListener): this;
        addListener(event: "removeListener", listener: RemoveListenerListener): this;
        addListener(event: "multipleResolves", listener: MultipleResolveListener): this;

        emit(event: "beforeExit", code: number): boolean;
        emit(event: "disconnect"): boolean;
        emit(event: "exit", code: number): boolean;
        emit(event: "rejectionHandled", promise: Promise<any>): boolean;
        emit(event: "uncaughtException", error: Error): boolean;
        emit(event: "unhandledRejection", reason: any, promise: Promise<any>): boolean;
        emit(event: "warning", warning: Error): boolean;
        emit(event: "message", message: any, sendHandle: any): this;
        emit(event: Signals, signal: Signals): boolean;
        emit(event: "newListener", eventName: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "removeListener", eventName: string, listener: (...args: any[]) => void): this;
        emit(event: "multipleResolves", listener: MultipleResolveListener): this;

        on(event: "beforeExit", listener: BeforeExitListener): this;
        on(event: "disconnect", listener: DisconnectListener): this;
        on(event: "exit", listener: ExitListener): this;
        on(event: "rejectionHandled", listener: RejectionHandledListener): this;
        on(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        on(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        on(event: "warning", listener: WarningListener): this;
        on(event: "message", listener: MessageListener): this;
        on(event: Signals, listener: SignalsListener): this;
        on(event: "newListener", listener: NewListenerListener): this;
        on(event: "removeListener", listener: RemoveListenerListener): this;
        on(event: "multipleResolves", listener: MultipleResolveListener): this;

        once(event: "beforeExit", listener: BeforeExitListener): this;
        once(event: "disconnect", listener: DisconnectListener): this;
        once(event: "exit", listener: ExitListener): this;
        once(event: "rejectionHandled", listener: RejectionHandledListener): this;
        once(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        once(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        once(event: "warning", listener: WarningListener): this;
        once(event: "message", listener: MessageListener): this;
        once(event: Signals, listener: SignalsListener): this;
        once(event: "newListener", listener: NewListenerListener): this;
        once(event: "removeListener", listener: RemoveListenerListener): this;
        once(event: "multipleResolves", listener: MultipleResolveListener): this;

        prependListener(event: "beforeExit", listener: BeforeExitListener): this;
        prependListener(event: "disconnect", listener: DisconnectListener): this;
        prependListener(event: "exit", listener: ExitListener): this;
        prependListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
        prependListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        prependListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        prependListener(event: "warning", listener: WarningListener): this;
        prependListener(event: "message", listener: MessageListener): this;
        prependListener(event: Signals, listener: SignalsListener): this;
        prependListener(event: "newListener", listener: NewListenerListener): this;
        prependListener(event: "removeListener", listener: RemoveListenerListener): this;
        prependListener(event: "multipleResolves", listener: MultipleResolveListener): this;

        prependOnceListener(event: "beforeExit", listener: BeforeExitListener): this;
        prependOnceListener(event: "disconnect", listener: DisconnectListener): this;
        prependOnceListener(event: "exit", listener: ExitListener): this;
        prependOnceListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
        prependOnceListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        prependOnceListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        prependOnceListener(event: "warning", listener: WarningListener): this;
        prependOnceListener(event: "message", listener: MessageListener): this;
        prependOnceListener(event: Signals, listener: SignalsListener): this;
        prependOnceListener(event: "newListener", listener: NewListenerListener): this;
        prependOnceListener(event: "removeListener", listener: RemoveListenerListener): this;
        prependOnceListener(event: "multipleResolves", listener: MultipleResolveListener): this;

        listeners(event: "beforeExit"): BeforeExitListener[];
        listeners(event: "disconnect"): DisconnectListener[];
        listeners(event: "exit"): ExitListener[];
        listeners(event: "rejectionHandled"): RejectionHandledListener[];
        listeners(event: "uncaughtException"): UncaughtExceptionListener[];
        listeners(event: "unhandledRejection"): UnhandledRejectionListener[];
        listeners(event: "warning"): WarningListener[];
        listeners(event: "message"): MessageListener[];
        listeners(event: Signals): SignalsListener[];
        listeners(event: "newListener"): NewListenerListener[];
        listeners(event: "removeListener"): RemoveListenerListener[];
        listeners(event: "multipleResolves"): MultipleResolveListener[];
    }

    interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        Buffer: typeof Buffer;
        DataView: typeof DataView;
        Date: typeof Date;
        Error: typeof Error;
        EvalError: typeof EvalError;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        GLOBAL: Global;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: Function;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: Function;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        clearImmediate: (immediateId: Immediate) => void;
        clearInterval: (intervalId: Timeout) => void;
        clearTimeout: (timeoutId: Timeout) => void;
        console: typeof console;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        process: Process;
        root: Global;
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => Immediate;
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timeout;
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timeout;
        queueMicrotask: typeof queueMicrotask;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        gc: () => void;
        v8debug?: any;
    }

    // compatibility with older typings
    interface Timer {
        hasRef(): boolean;
        ref(): this;
        refresh(): this;
        unref(): this;
        [Symbol.toPrimitive](): number;
    }

    class Immediate {
        hasRef(): boolean;
        ref(): this;
        unref(): this;
        _onImmediate: Function; // to distinguish it from the Timeout class
    }

    class Timeout implements Timer {
        hasRef(): boolean;
        ref(): this;
        refresh(): this;
        unref(): this;
        [Symbol.toPrimitive](): number;
    }

    class Module {
        static runMain(): void;
        static wrap(code: string): string;

        /**
         * @deprecated Deprecated since: v12.2.0. Please use createRequire() instead.
         */
        static createRequireFromPath(path: string): NodeRequire;
        static createRequire(path: string): NodeRequire;
        static builtinModules: string[];

        static Module: typeof Module;

        exports: any;
        require: NodeRequireFunction;
        id: string;
        filename: string;
        loaded: boolean;
        /** @deprecated since 12.19.0 Please use `require.main` and `module.children` instead. */
        parent: Module | null | undefined;
        children: Module[];
        /**
         * @since 11.14.0
         *
         * The directory name of the module. This is usually the same as the path.dirname() of the module.id.
         */
        path: string;
        paths: string[];

        constructor(id: string, parent?: Module);
    }

    interface Dict<T> {
        [key: string]: T | undefined;
    }

    type TypedArray =
        | Uint8Array
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Int8Array
        | Int16Array
        | Int32Array
        | BigUint64Array
        | BigInt64Array
        | Float32Array
        | Float64Array;
    type ArrayBufferView = TypedArray | DataView;
}
