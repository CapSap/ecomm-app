import firestore from "../config/firestore";
const cleanDocument = (doc) => ({ id: doc.id, ...doc.data() });

export const getALlpacks = async () => {
  const raw = await firestore.collection("packs").get();
  console.log(raw); // QuerySnapshot
  console.log(raw.docs); // [QueryDocumentSnapshot]
  console.log(raw.docs[0].id, raw.docs[0].data()); // string

  const cleaned = raw.docs.map(cleanDocument);

  return cleaned;
};

export const createPack = async (info) => {
  await firestore.collection("packs").add(info);
};
