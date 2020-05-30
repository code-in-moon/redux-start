import { produce } from "immer";

let book = { title: "run away" };

function publish(book) {
  return produce(book, (draftbook) => {
    draftbook.ispublish = true;
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
