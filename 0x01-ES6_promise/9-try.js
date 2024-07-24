export default function guardrail(mathFunction) {
  const queue = [];
  let res;

  try {
    res = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
