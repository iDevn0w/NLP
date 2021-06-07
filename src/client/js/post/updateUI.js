//update UI
export function updateUI(data) {
  const agreement = document.querySelector(".agreement");
  const confidence = document.querySelector(".confidence");
  const irony = document.querySelector(".irony");
  const model = document.querySelector(".model");
  const score_tag = document.querySelector(".score_tag");

  // change innerHTML dynamic
  agreement.innerHTML = `agreement: ${data.agreement}`;
  confidence.innerHTML = `confidence: ${data.confidence}`;
  irony.innerHTML = `irony: ${data.irony}`;
  model.innerHTML = `model: ${data.model}`;
  score_tag.innerHTML = `score_tag: ${data.score_tag}`;
}
