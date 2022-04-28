async function createGenetics(database, body) {
  let property = "genetic_info";
  let genetics = [];
  for (let genetic of body[property]) {
    let obj = {
      ncbi_gene_id: genetic.ncbi_gene_id,
      gene_name: genetic.gene_name,
      parameter: genetic.parameter,
      value: genetic.value,
      percentage: genetic.percentage,
      method: genetic.method,
      comment: genetic.comment,
    };
    let genetic_new = {};

    genetic_new.genetic_new = await database["Genetic"].build(obj);
    genetic_new.genetic_match = await database["GeneticMatcher"].build({});
    genetic_new.messages = "New entry and match for genetic parameter staged.";
    genetics.push(genetic_new);
  }
  return genetics;
}
module.exports = createGenetics;
