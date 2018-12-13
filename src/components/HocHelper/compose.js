const compose = (...func) => (comp) => func.reduceRight((prevResult, f) => f(prevResult),comp);

export default compose;