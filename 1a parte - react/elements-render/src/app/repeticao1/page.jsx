

const friends = ['nobody', 'everybody', 'god', 'me?'];

export default function RenderizarLista() {
    return friends.map((nome, i) => <li key={i} className="text-4xl text-white font-bold">{nome}</li>)


    return (
        <ul className="flex flex-col justify-center items-center">
            {jsx}
        </ul>

    );
}


/* for (let i = 0; i < friends.length; i++) {
          jsx.push(
              <li key={i} className="text-4xl text-white font-bold">
                  {friends[i]}
              </li>
          );
      }*/