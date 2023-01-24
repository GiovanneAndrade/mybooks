--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _BooksToCategories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."_BooksToCategories" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


--
-- Name: authors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.authors (
    id integer NOT NULL,
    name text NOT NULL,
    idade integer NOT NULL
);


--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.authors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.authors_id_seq OWNED BY public.authors.id;


--
-- Name: books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.books (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    classification numeric,
    "authorId" integer
);


--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: authors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authors ALTER COLUMN id SET DEFAULT nextval('public.authors_id_seq'::regclass);


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Data for Name: _BooksToCategories; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.authors VALUES (1, 'vespa', 25);
INSERT INTO public.authors VALUES (2, 'harry potter', 30);
INSERT INTO public.authors VALUES (25, 'teste', 45);
INSERT INTO public.authors VALUES (26, 'teste', 45);
INSERT INTO public.authors VALUES (27, 'giovsanne', 45);
INSERT INTO public.authors VALUES (28, 'giovanne', 1);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.books VALUES (16, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (17, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (18, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (19, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (20, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (21, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (22, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (23, 'teste 10', 'magia', 30, 1);
INSERT INTO public.books VALUES (24, 'teste 10', 'magia', 30, 2);
INSERT INTO public.books VALUES (25, 'teste 10', 'magia', 30, 2);
INSERT INTO public.books VALUES (26, 'teste 10', 'magia', 30, 2);
INSERT INTO public.books VALUES (27, 'teste 10', 'magia', 10, 2);
INSERT INTO public.books VALUES (28, 'aeste 10', 'magia', 15, 2);
INSERT INTO public.books VALUES (30, 'aeste 10', 'magia', 1, 2);
INSERT INTO public.books VALUES (31, 'giovsanne', 'test test teste', 18, 1);
INSERT INTO public.books VALUES (32, 'giovsanne', 'test test teste', 18, 1);
INSERT INTO public.books VALUES (33, 'giovanne', 'wrgerg', 12, 1);
INSERT INTO public.books VALUES (15, 'giovanne', 'wrgerg', 12, 1);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'harry potter');
INSERT INTO public.categories VALUES (2, 'vespa potter');
INSERT INTO public.categories VALUES (5, 'aeste 10');
INSERT INTO public.categories VALUES (6, 'tharsila teste');
INSERT INTO public.categories VALUES (7, 'giovanne');
INSERT INTO public.categories VALUES (10, 'giovanne andrade');
INSERT INTO public.categories VALUES (11, 'tata');


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.authors_id_seq', 28, true);


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.books_id_seq', 33, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 11, true);


--
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: _BooksToCategories_AB_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_BooksToCategories_AB_unique" ON public."_BooksToCategories" USING btree ("A", "B");


--
-- Name: _BooksToCategories_B_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_BooksToCategories_B_index" ON public."_BooksToCategories" USING btree ("B");


--
-- Name: categories_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX categories_name_key ON public.categories USING btree (name);


--
-- Name: _BooksToCategories _BooksToCategories_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_BooksToCategories"
    ADD CONSTRAINT "_BooksToCategories_A_fkey" FOREIGN KEY ("A") REFERENCES public.books(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _BooksToCategories _BooksToCategories_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_BooksToCategories"
    ADD CONSTRAINT "_BooksToCategories_B_fkey" FOREIGN KEY ("B") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: books books_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public.authors(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

