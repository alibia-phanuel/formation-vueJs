<template>
  <div class="contact-page">
    <section class="hero">
      <h1>Contactez-nous</h1>
      <p>
        Une question, une suggestion ou juste envie de dire bonjour ? On vous
        répond sous 24h.
      </p>
    </section>

    <div class="contact-grid">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="field">
          <label for="name">Nom</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Jean Dupont"
            required
          />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="jean@exemple.com"
            required
          />
        </div>

        <div class="field">
          <label for="subject">Sujet</label>
          <select id="subject" v-model="form.subject">
            <option value="">Choisir un sujet</option>
            <option value="question">Question générale</option>
            <option value="collaboration">Collaboration</option>
            <option value="bug">Signaler un bug</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Votre message..."
            required
          />
        </div>

        <button type="submit" :disabled="submitted">
          {{ submitted ? "Message envoyé ✓" : "Envoyer le message" }}
        </button>
      </form>

      <aside class="contact-info">
        <div class="info-card" v-for="info in infos" :key="info.label">
          <span class="info-icon">{{ info.icon }}</span>
          <div>
            <strong>{{ info.label }}</strong>
            <p>{{ info.value }}</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitted = ref(false);

const handleSubmit = () => {
  console.log("Formulaire envoyé :", form.value);
  submitted.value = true;
};

const infos = [
  { icon: "📧", label: "Email", value: "contact@monblog.fr" },
  { icon: "🕐", label: "Disponibilité", value: "Lun – Ven, 9h – 18h" },
  { icon: "📍", label: "Localisation", value: "Paris, France" },
];
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem 0;
}

.hero h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.hero p {
  color: var(--pico-muted-color);
  font-size: 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 2rem;
  align-items: start;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.9rem;
  font-weight: 500;
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  align-self: flex-start;
  padding: 0.6rem 1.4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--pico-muted-border-color);
  border-radius: 8px;
}

.info-icon {
  font-size: 1.25rem;
}

.info-card strong {
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.2rem;
}

.info-card p {
  font-size: 0.85rem;
  color: var(--pico-muted-color);
  margin: 0;
}

@media (max-width: 600px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
