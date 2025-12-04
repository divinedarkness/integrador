import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ReceitasContainer,
  TopBar,
  CreateForm,
  List,
  Card,
  Detail
} from "./style";
import { Header } from "../../components/Header"


const BASE_URL = "http://localhost:3001";

export function ReceitasList() {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: "",
    preparo: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchReceitas();
  }, []);

  async function fetchReceitas() {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/receitas`);
      const data = await res.json();
      setReceitas(data);
    } catch (err) {
      console.error("Erro ao buscar receitas", err);
      alert("Erro ao buscar receitas.");
    } finally {
      setLoading(false);
    }
  }

  function SetReceitaSelection(receitas) {
        setSelectedReceitaId(receita.id)
    }


  async function handleCreate(e) {
    e.preventDefault();
    if (!form.title.trim()) return alert("Título é obrigatório");

    const newRecipe = {
      title: form.title,
      description: form.description,
      ingredients: form.ingredients.split("\n").map(l => l.trim()).filter(Boolean),
      preparo: form.preparo,
      favorite: false,
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch(`${BASE_URL}/receitas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe)
      });
      const created = await res.json();
      setReceitas(prev => [created, ...prev]);
      setForm({ title: "", description: "", ingredients: "", preparo: "" });
    } catch (err) {
      console.error(err);
      alert("Erro ao criar receita");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Excluir essa receita?")) return;
    try {
      await fetch(`${BASE_URL}/receitas/${id}`, { method: "DELETE" });
      setReceitas(prev => prev.filter(r => r.id !== id));
    } catch (err) {
      console.error(err);
      alert("Erro ao deletar");
    }
  }

  async function toggleFavorite(id, current) {
    try {
      const res = await fetch(`${BASE_URL}/receitas/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favorite: !current })
      });
      const updated = await res.json();
      setReceitas(prev => prev.map(p => (p.id === updated.id ? updated : p)));
    } catch (err) {
      console.error(err);
      alert("Erro ao atualizar favorito");
    }
  }

  const filtered = receitas.filter(r =>
    r.title.toLowerCase().includes(q.toLowerCase()) ||
    (r.ingredients && r.ingredients.join(" ").toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <ReceitasContainer>
      <Header />
      <TopBar>
        <div className="searchGroup">
          <input
            placeholder="Buscar por título ou ingrediente..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>

        <div>
          <button onClick={() => navigate("/receitas")}>Atualizar lista</button>
        </div>
      </TopBar>

      <CreateForm onSubmit={handleCreate}>
        <input
          placeholder="Título"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Descrição curta"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <textarea
          placeholder={"Ingredientes (uma linha por ingrediente)"}
          value={form.ingredients}
          onChange={e => setForm({ ...form, ingredients: e.target.value })}
        />
        <textarea
          placeholder="Modo de preparo"
          value={form.preparo}
          onChange={e => setForm({ ...form, preparo: e.target.value })}
        />
        <button type="submit">Adicionar</button>
      </CreateForm>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <h2>Receitas ({filtered.length})</h2>
          <List>
            {filtered.map(r => (
              <Card key={r.id}>
                <h3>{r.title}</h3>
                <p>{r.description}</p>

                <div className="actions">
                  <Link to={`/receitas/${r.id}`}>ver</Link>
                  <button className="edit" onClick={() => navigate(`/receitas/${r.id}?edit=true`)}>editar</button>
                  <button className="delete" onClick={() => handleDelete(r.id)}>excluir</button>
                  {/* <button className="favorite" onClick={() => toggleFavorite(r.id, r.favorite)}>
                    {r.favorite ? "★" : "☆"}
                  </button> */}
                </div>
              </Card>
            ))}
          </List>
        </>
      )}
    </ReceitasContainer>
  );
}

export function ReceitaDetalhes() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/recipes/${id}`);
        if (res.status === 404) {
          setReceita(null);
        } else {
          const data = await res.json();
          setReceita(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div style={{ padding: 20 }}>Carregando...</div>;
  if (!receita) return <div style={{ padding: 20 }}>Receita não encontrada</div>;

  return (
    <ReceitasContainer>
      <button onClick={() => navigate(-1)}>← Voltar</button>

      <Detail>
        <h2>{receita.title}</h2>
        <div className="meta">
          <div>Adicionada em: {new Date(receita.createdAt).toLocaleDateString()}</div>
          <div>{receita.favorite ? "Favorita ★" : " "}</div>
        </div>

        <p>{receita.description}</p>

        <div className="ingredients">
          <h4>Ingredientes</h4>
          <ul>
            {(receita.ingredients || []).map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </div>

        <div className="preparo">
          <h4>Modo de preparo</h4>
          <p style={{ whiteSpace: "pre-wrap" }}>{receita.preparo}</p>
        </div>
      </Detail>
    </ReceitasContainer>
  );
}
