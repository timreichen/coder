import { assert, assertEquals, assertThrowsAsync } from "https://deno.land/std/testing/asserts.ts"
import { coder } from "./mod.ts"

Deno.test({
  name: "null",
  fn: () => {
  const data = null
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
  name: "undefined",
  fn: () => {
  const data = undefined
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
  name: "true",
  fn: () => {
  const data = true
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
  name: "false",
  fn: () => {
  const data = false
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
  name: "Infinity",
  fn: () => {
  const data = Infinity
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "-Infinity",
fn: () => {
  const data = -Infinity
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "fixed Int -1",
fn: () => {
  const data = -1
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "fixed Int 32",
fn: () => {
  const data = -32
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "Int 8",
fn: () => {
  const data = -126
  const expectedByteLength = 2

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "Int16",
fn: () => {
  const data = -4095
  const expectedByteLength = 3

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "Int32",
fn: () => {
  const data = -1442511
  const expectedByteLength = 5

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "number constructor",
fn: () => {
  const data = Number(1)
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})


Deno.test({
name: "fixed uInt 0",
fn: () => {
  const data = 0
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "fixed uInt 10",
fn: () => {
  const data = 10
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "uInt8",
fn: () => {
  const data = 65
  const expectedByteLength = 2

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "uInt16",
fn: () => {
  const data = 256
  const expectedByteLength = 3

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "uInt32",
fn: () => {
  const data = 1442511
  const expectedByteLength = 5

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "BigInt",
fn: () => {
  const data = 14425111231354n
  const expectedByteLength = 19

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "-BigInt",
fn: () => {
  const data = -14425111231354n
  const expectedByteLength = 20

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})


Deno.test({
name: "Date",
fn: () => {
  const data = new Date()
  const expectedByteLength = 9

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data.getTime(), result.getTime(), `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "RegExp",
fn: () => {
  const data = /test[123]/g
  const expectedByteLength = 12

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data.source, result.source, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "fixed String 0",
fn: () => {
  const data = "a".repeat(0)
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "fixed String 21",
fn: () => {
  const data = "a".repeat(21)
  const expectedByteLength = 22

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "String8",
fn: () => {
  const data = "a".repeat(125)
  const expectedByteLength = 127

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "String16",
fn: () => {
  const data = "a".repeat(4000)
  const expectedByteLength = 4003

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})
Deno.test({
name: "String32",
fn: () => {
  const data = "a".repeat(1442511)
  const expectedByteLength = 1442516

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "RegExp",
fn: () => {
  const data = /[123]+/g
  const expectedByteLength = 9

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data.source, result.source, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "Object 0",
fn: () => {
  const data = {}
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "Object 1",
fn: () => {
  const data = {foo : true }
  const expectedByteLength = 6

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "Array 0",
fn: () => {
  const data: any[] = []
  const expectedByteLength = 1

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})

Deno.test({
name: "Array 1",
fn: () => {
  const data = ["foo", true ]
  const expectedByteLength = 6

  const buffer = coder.encode(data)
  const byteLength = buffer.byteLength
  assertEquals(byteLength, expectedByteLength, `byteLength ${byteLength} is expected to be ${expectedByteLength}`)
  const result = coder.decode(buffer)
  assertEquals(data, result, `decoded value ${data} is not equal decoded value ${result}`)
  }
})