--
-- PostgreSQL database dump
--

\restrict 9fdUhIiY2ZcyAJ2oObrsozdv2OM46qvoHL46B6Qq6ZRN3UnHcWkvgI6m675M4Py

-- Dumped from database version 17.10 (Homebrew)
-- Dumped by pg_dump version 17.10 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: articles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.articles (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(150) NOT NULL,
    description text,
    excerpt text,
    content text,
    thumbnail_url character varying(500),
    cover_image_url character varying(500),
    author_name character varying(150),
    author_avatar character varying(500),
    author_role character varying(150),
    category character varying(100),
    badge character varying(100),
    tags jsonb DEFAULT '[]'::jsonb,
    publish_date date NOT NULL,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    reading_time character varying(50),
    is_featured boolean DEFAULT false,
    status character varying(30) DEFAULT 'published'::character varying
);


--
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;


--
-- Name: otp_codes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.otp_codes (
    id integer NOT NULL,
    phone character varying(20) NOT NULL,
    code_hash character varying(255) NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    attempts integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    used_at timestamp without time zone
);


--
-- Name: otp_codes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.otp_codes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: otp_codes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.otp_codes_id_seq OWNED BY public.otp_codes.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    product_name character varying(255) NOT NULL,
    description text,
    price numeric(12,2) NOT NULL,
    category character varying(100),
    image_url character varying(500),
    rating numeric(3,2),
    stock integer DEFAULT 0,
    old_price numeric(12,2),
    discount integer DEFAULT 0,
    is_featured boolean DEFAULT false,
    is_best_seller boolean DEFAULT false,
    is_new boolean DEFAULT false,
    brand character varying(100),
    is_available boolean DEFAULT true,
    tags jsonb DEFAULT '[]'::jsonb,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    phone character varying(20) NOT NULL,
    name character varying(150),
    email character varying(255),
    city character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: articles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);


--
-- Name: otp_codes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.otp_codes ALTER COLUMN id SET DEFAULT nextval('public.otp_codes_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.articles (id, title, slug, description, excerpt, content, thumbnail_url, cover_image_url, author_name, author_avatar, author_role, category, badge, tags, publish_date, updated_at, reading_time, is_featured, status) FROM stdin;
1	راهنمای کامل نگهداری سگ در آپارتمان	complete-dog-care-in-apartment	آموزش کامل نگهداری سگ در محیط آپارتمان، انتخاب نژاد مناسب، تغذیه، پیاده‌روی، آموزش و نکات بهداشتی.	اگر قصد دارید یک سگ را در محیط آپارتمان نگهداری کنید، باید با اصولی مانند انتخاب نژاد مناسب، برنامه غذایی، آموزش، پیاده‌روی و رعایت بهداشت آشنا باشید. در این مقاله تمام نکات ضروری را بررسی کرده‌ایم.	نگهداری سگ در محیط آپارتمان برخلاف تصور بسیاری از افراد کاملاً امکان‌پذیر است، اما نیازمند رعایت اصول مشخصی است. اولین قدم، انتخاب نژادی متناسب با فضای زندگی شماست. نژادهایی مانند پامرانین، شیتزو، پودل و کاوالیر معمولاً برای زندگی در آپارتمان مناسب‌تر هستند. پس از انتخاب سگ، باید محیط خانه را برای ورود او آماده کنید؛ محل خواب، ظرف آب و غذا، اسباب‌بازی و وسایل بهداشتی از ضروری‌ترین تجهیزات هستند. تغذیه منظم با غذای استاندارد، واکسیناسیون به‌موقع، مراجعه دوره‌ای به دامپزشک و پیاده‌روی روزانه نقش مهمی در سلامت جسم و روح حیوان دارند. همچنین آموزش دستشویی، فرمان‌های اولیه و اجتماعی شدن سگ باید از سنین پایین آغاز شود. رعایت این نکات باعث می‌شود هم حیوان سالم‌تر باشد و هم زندگی مشترک شما با آرامش بیشتری ادامه پیدا کند.	/pic/blog/blogdog1.svg	/pic/blog/blogdog1.svg	تیم تولید محتوای Shopet	/pic/blog/authors/shopet.png	کارشناس حیوانات خانگی	سگ	مقاله جدید	["سگ", "نگهداری", "آپارتمان", "آموزش", "تغذیه"]	2025-08-22	2025-08-25 00:00:00	8 دقیقه	t	published
2	۱۰ غذای ممنوعه برای سگ که هر صاحب سگ باید بداند	10-dangerous-foods-for-cats	مواد غذایی خطرناک برای گربه‌ها که می‌توانند باعث مسمومیت یا آسیب‌های جدی شوند.	بسیاری از غذاهایی که انسان‌ها روزانه مصرف می‌کنند برای گربه‌ها خطرناک هستند. در این مقاله مهم‌ترین مواد غذایی ممنوعه و جایگزین‌های مناسب آن‌ها را معرفی کرده‌ایم.	گربه‌ها سیستم گوارش بسیار حساسی دارند و بسیاری از خوراکی‌های معمول انسان برای آن‌ها خطرناک است. شکلات، پیاز، سیر، انگور، کشمش، آووکادو، الکل، نوشیدنی‌های کافئین‌دار، استخوان پخته و شیرینی‌های حاوی زایلیتول از مهم‌ترین مواد غذایی ممنوعه هستند. مصرف هر یک از این مواد می‌تواند باعث مسمومیت، آسیب کلیوی، مشکلات گوارشی یا حتی مرگ حیوان شود. بهترین انتخاب برای تغذیه گربه استفاده از غذای خشک و کنسروهای استاندارد مخصوص گربه است که تمام نیازهای تغذیه‌ای او را تأمین می‌کنند. همچنین همیشه آب تازه و تمیز در اختیار حیوان قرار دهید و از دادن غذاهای چرب یا پرادویه خودداری کنید.	/pic/blog/blogdog2.svg	/pic/blog/blogdog2.svg	تیم تولید محتوای Shopet	/pic/blog/authors/shopet.png	کارشناس تغذیه حیوانات	سگ	تغذیه	["سگ", "تغذیه", "سلامت", "غذای سگ"]	2025-08-18	2025-08-18 00:00:00	6 دقیقه	t	published
3	وسایل ضروری که قبل از آوردن حیوان خانگی سگ باید تهیه کنید	essential-pet-accessories	معرفی مهم‌ترین لوازم موردنیاز برای شروع نگهداری از حیوانات خانگی.	اگر قصد دارید برای اولین بار از یک حیوان خانگی نگهداری کنید، بهتر است قبل از ورود حیوان تمام وسایل ضروری را تهیه کنید تا روزهای اول بدون دغدغه سپری شود.	ورود یک حیوان خانگی به خانه نیازمند آماده‌سازی محیط است. مهم‌ترین وسایلی که باید از قبل تهیه شوند شامل ظرف آب و غذا، غذای مناسب، قلاده، باکس حمل، جای خواب، اسباب‌بازی، برس، شامپو، ناخن‌گیر، تشویقی و محصولات بهداشتی هستند. انتخاب محصولات باکیفیت علاوه بر افزایش راحتی حیوان، از بروز بسیاری از مشکلات سلامتی جلوگیری می‌کند. همچنین بهتر است وسایل متناسب با سن، اندازه و نژاد حیوان انتخاب شوند تا بیشترین کارایی را داشته باشند. تهیه این تجهیزات از همان ابتدا باعث می‌شود حیوان سریع‌تر با محیط جدید سازگار شود و استرس کمتری را تجربه کند.	/pic/blog/blogdog3.svg	/pic/blog/blogdog3.svg	تیم تولید محتوای Shopet	/pic/blog/authors/shopet.png	کارشناس محصولات حیوانات	لوازم	راهنمای خرید	["لوازم", "نگهداری", "خرید", "حیوان خانگی"]	2025-08-15	2025-08-17 00:00:00	7 دقیقه	f	published
\.


--
-- Data for Name: otp_codes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.otp_codes (id, phone, code_hash, expires_at, attempts, created_at, used_at) FROM stdin;
1	09123456789	$2b$10$IRCFgSz7gIIS0qaWkkbgB.9VsR.x.UL7hhBF8YVrrMaDe0u6y9uJm	2026-08-04 10:49:19.57	0	2026-08-04 10:47:19.589819	2026-08-04 10:49:19.059555
2	09132039924	$2b$10$TIVMFnwU0f68zX1POW8bCeW5nnmJp4rIkGiJLxihNwcCARAB8.b8a	2026-08-04 11:50:42.912	0	2026-08-04 11:48:42.920343	2026-08-04 11:49:04.005715
3	09123456789	$2b$10$V6hxLf08GkS0w/1ZUXgllu3f0AhERgTiGIksUb0aa0ZGBDR0jyNQy	2026-08-04 12:07:21.638	0	2026-08-04 12:05:21.65216	2026-08-04 12:06:09.824159
4	09011220330	$2b$10$TgrZGZRuMqP.m8h2nLJuau99y9htyCDv.ANUCkbODZ5Igy05.GllO	2026-08-04 12:18:39.741	0	2026-08-04 12:16:39.746166	2026-08-04 12:16:53.161955
5	09132039924	$2b$10$FwmU7cqi5sQlLlsQLGhNVOIMLLeyPeb9A4NCGOwSCkpMaxdsG.wya	2026-08-05 13:35:18.902	0	2026-08-05 13:33:18.920213	2026-08-05 13:33:29.382674
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products (id, product_name, description, price, category, image_url, rating, stock, old_price, discount, is_featured, is_best_seller, is_new, brand, is_available, tags, created_at, updated_at) FROM stdin;
1	غذای گربه مفید پریمیوم (۴ کیلوگرم)	غذای خشک کامل مخصوص گربه‌های بالغ، غنی از پروتئین، ویتامین‌ها و مواد معدنی برای حفظ سلامت پوست، مو و دستگاه گوارش.	520000.00	cat-food	/Images/products/foodcat1.svg	4.80	12	610000.00	15	t	t	f	Mofeed	t	["Featured", "Best Seller", "Cat Food", "Premium"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
2	غذای گربه Kitzy پریمیوم (۲ کیلوگرم)	فرمول سبک و قابل هضم برای گربه‌های حساس با طعم دلچسب، مناسب استفاده روزانه و تقویت سیستم ایمنی.	340000.00	cat-food	/Images/products/foodvati.svg	4.60	18	\N	0	f	f	f	Kitzy	t	["Cat Food", "Daily"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
3	غذای سگ Science Diet (۳ کیلوگرم)	غذای تخصصی سگ با ترکیبات متعادل برای افزایش انرژی، سلامت مفاصل و تقویت سیستم ایمنی.	890000.00	dog-food	/pic/products/scie.jpg	4.90	9	\N	0	f	f	f	Science Diet	t	["Dog Food", "Premium"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
4	مولتی ویتامین گربه Nulo	مکمل ویتامینی کامل برای تقویت سیستم ایمنی، سلامت استخوان‌ها و افزایش شادابی گربه.	295000.00	supplement	/Images/products/cat.jpeg	4.70	25	\N	0	f	f	f	Nulo	t	["Supplement", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
5	باکس حمل سگ و گربه سایز ۳ پانیتو	باکس حمل مقاوم و سبک با تهویه مناسب، مناسب سفرهای شهری و بین‌شهری.	1850000.00	accessories	/pic/products/Panito.png	4.50	6	\N	0	f	f	t	Panito	t	["Carrier", "Travel"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
6	کوله پشتی حبابدار سگ و گربه مدل یونیورس	کوله حمل مدرن با پنجره حبابی و طراحی ارگونومیک، مناسب پیاده‌روی و سفر.	2350000.00	accessories	/Images/products/bag.svg	4.80	8	2930000.00	20	t	f	t	Universe	t	["Featured", "Backpack", "Travel", "New"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
7	قلاده کتفی پددار سگ سایز بزرگ	قلاده مقاوم با بند قابل تنظیم و پد نرم، مناسب سگ‌های نژاد متوسط و بزرگ.	390000.00	accessories	/Images/products/saver.svg	4.40	15	\N	0	f	f	t	Keep	t	["Harness", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
8	سشوار حیوانات خانگی PET GROOMING	سشوار کم‌صدا با قدرت بالا برای خشک کردن سریع و ایمن موهای حیوانات خانگی.	3250000.00	grooming	/Images/products/glovs.svg	4.80	4	\N	0	f	f	f	PET GROOMING	t	["Dryer", "Professional"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
9	باکس حمل پرندگان Eva	باکس حمل سبک و مقاوم با تهویه مناسب برای جابه‌جایی انواع پرندگان زینتی.	1450000.00	accessories	/pic/products/birdboxroyal.avif	4.50	11	\N	0	f	f	f	Eva	t	["Bird", "Carrier"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
10	طناب بازی سگ	اسباب‌بازی طنابی مقاوم مناسب بازی، آموزش و تقویت سلامت دندان سگ.	185000.00	toy	/pic/products/bazisag4.jpeg	4.60	24	\N	0	f	f	f	Trixie	t	["Toy", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
11	کیف حمل گربه Royal King	کیف حمل مقاوم با تهویه مناسب و دسته ارگونومیک، مناسب استفاده روزمره.	2480000.00	accessories	/pic/products/box petkiti gorbe.jpeg	4.70	9	\N	0	f	f	f	Royal King	t	["Carrier", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
12	کنسرو غذای گربه	کنسرو خوش‌طعم با گوشت تازه و مواد مغذی، مناسب گربه‌های بالغ.	165000.00	cat-food	/pic/products/canservercat.jpg	4.80	36	\N	0	f	f	t	Mofeed	t	["Cat Food", "Wet Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
13	مکمل گربه Euro Pet	مکمل غذایی حاوی ویتامین و مواد معدنی برای افزایش انرژی و سلامت عمومی گربه.	420000.00	supplement	/pic/products/catcaream.jpg	4.50	14	\N	0	f	f	f	Euro Pet	t	["Supplement", "Vitamin"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
14	اسپری ضدعفونی پنجه حیوانات	اسپری بهداشتی مناسب تمیز کردن پنجه حیوانات پس از پیاده‌روی.	280000.00	grooming	/pic/products/esperay.jpg	4.30	17	\N	0	f	f	f	Pet Care	t	["Cleaning", "Hygiene"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
15	مولتی بوست گربه	مکمل تقویتی حاوی انواع ویتامین و مواد معدنی برای افزایش اشتها و تقویت سیستم ایمنی.	610000.00	supplement	/pic/products/catmedials.jpeg	4.80	10	\N	0	f	f	f	Multi Boost	t	["Supplement", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
16	مولتی ویتامین Jonest	مکمل ویتامینی مناسب سگ و گربه جهت حفظ سلامت استخوان، پوست و مو.	540000.00	supplement	/pic/products/catvit1.jpeg	4.60	13	\N	0	f	f	f	Jonest	t	["Vitamin", "Dog", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
17	مولتی ویتامین سگ Euro Pet	مکمل غذایی مخصوص سگ برای تقویت سیستم ایمنی، مفاصل و سلامت عمومی بدن.	580000.00	supplement	/pic/products/creamsag.jpg	4.70	8	\N	0	f	f	f	Euro Pet	t	["Supplement", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
18	دستکش تمیزکننده Grooming	دستکش مخصوص جمع‌آوری موهای اضافی حیوانات هنگام شانه کردن و استحمام.	330000.00	grooming	/pic/products/dashtkeshtamizi.jpeg	4.60	21	\N	0	f	f	f	Grooming	t	["Brush", "Cleaning"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
19	اسباب‌بازی گربه Mewo	اسباب‌بازی سرگرم‌کننده مناسب افزایش تحرک و کاهش استرس گربه‌های خانگی.	245000.00	toy	/pic/products/katikati.jpg	4.70	18	\N	0	f	f	f	Mewo	t	["Toy", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
20	مولتی ویتامین سگ Beaphar	مکمل تخصصی حاوی ویتامین‌های ضروری برای تقویت استخوان‌ها، مفاصل و سیستم ایمنی سگ.	690000.00	supplement	/pic/products/moltivitaminsag.jpg	4.80	11	920000.00	25	t	t	t	Beaphar	t	["Featured", "Best Seller", "Supplement", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
21	قلاده سگ Keep	قلاده مقاوم با بند قابل تنظیم، مناسب استفاده روزانه و پیاده‌روی.	320000.00	accessories	/pic/products/qalade1.jpg	4.50	20	\N	0	f	f	f	Keep	t	["Collar", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
22	قلاده سگ بزرگ Keep	قلاده مخصوص سگ‌های نژاد بزرگ با سگک فلزی مقاوم و طراحی ارگونومیک.	420000.00	accessories	/pic/products/sagbozorg.webp	4.60	12	\N	0	f	f	f	Keep	t	["Collar", "Large Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
23	قلاده سگ کوچک Keep	قلاده سبک و نرم مناسب سگ‌های کوچک با قابلیت تنظیم اندازه.	260000.00	accessories	/pic/products/qalade4.jpg	4.40	17	\N	0	f	f	f	Keep	t	["Collar", "Small Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
24	غذای گربه Royal Canin	غذای خشک سوپر پریمیوم مناسب گربه‌های بالغ با فرمول متعادل و ارزش غذایی بالا.	1980000.00	cat-food	/pic/products/qazagorbe1.jpg	4.90	8	2320000.00	15	t	t	f	Royal Canin	t	["Featured", "Premium", "Best Seller", "Cat Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
25	غذای گربه بریتیش Royal Canin	فرمول اختصاصی برای گربه‌های نژاد بریتیش با ترکیبات تقویت‌کننده مفاصل و عضلات.	2150000.00	cat-food	/pic/products/qazagorbe2.jpg	4.80	6	\N	0	f	f	f	Royal Canin	t	["British", "Cat Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
26	غذای ماهی Guppy	غذای پولکی کامل برای انواع ماهیان گوپی، سرشار از مواد مغذی و ویتامین‌ها.	185000.00	fish-food	/pic/products/qazamahi.jpg	4.50	25	\N	0	f	f	f	Guppy	t	["Fish Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
27	غذای ماهی Hikari	غذای باکیفیت ژاپنی برای ماهیان آکواریومی با قابلیت هضم بالا.	420000.00	fish-food	/pic/products/Hikari-Discus-Bites-01.jpg	4.80	14	\N	0	f	f	f	Hikari	t	["Premium", "Fish Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
28	غذای ماهی Marine	غذای کامل مخصوص ماهیان آب‌شور با ترکیبات غنی از پروتئین و امگا ۳.	590000.00	fish-food	/pic/products/qazamahi6.jpeg	4.70	10	\N	0	f	f	f	Marine	t	["Salt Water", "Fish Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
29	غذای ماهی Alborz	غذای اقتصادی و مغذی برای انواع ماهیان زینتی آب شیرین.	290000.00	fish-food	/pic/products/qazamahiq.jpeg	4.40	19	\N	0	f	f	f	Alborz	t	["Fish Food", "Economy"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
30	غذای سگ کوچک Royal Canin	غذای خشک مخصوص سگ‌های نژاد کوچک با دانه‌بندی مناسب و هضم آسان.	1890000.00	dog-food	/pic/products/qazasag2.jpg	4.90	9	\N	0	f	f	f	Royal Canin	t	["Dog Food", "Premium"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
31	غذای سگ Wanpy	غذای کامل مخصوص سگ‌های بالغ با پروتئین بالا و طعم طبیعی گوشت.	980000.00	dog-food	/pic/products/qazasag4.jpg	4.70	13	\N	0	f	f	f	Wanpy	t	["Dog Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
32	غذای گربه Mofeed (۳ کیلوگرم)	غذای خشک متعادل برای گربه‌های بالغ، مناسب استفاده روزانه.	760000.00	cat-food	/pic/products/qazasag5.jpg	4.60	15	\N	0	f	f	f	Mofeed	t	["Cat Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
33	ویتامین D3 Natora	مکمل حاوی ویتامین D3 برای تقویت استخوان‌ها و سلامت عمومی حیوانات خانگی.	310000.00	supplement	/pic/products/qorsesag.jpeg	4.50	23	\N	0	f	f	f	Natora	t	["Vitamin", "D3"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
34	سشوار سگ Clarity	سشوار حرفه‌ای مخصوص سگ با صدای کم و موتور قدرتمند برای خشک کردن سریع.	2890000.00	grooming	/pic/products/seshovarsogqq.svg	4.80	5	3700000.00	22	t	f	t	Clarity	t	["Featured", "Dryer", "Professional", "New"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
35	سشوار پت خانگی	سشوار سبک و کم‌مصرف مناسب استفاده خانگی برای سگ و گربه.	1850000.00	grooming	/pic/products/shernebaoseshovar.jpeg	4.50	7	\N	0	f	f	f	Pet Home	t	["Dryer"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
36	مولتی ویتامین سگ Persa	مکمل غذایی حاوی ویتامین‌ها و مواد معدنی برای افزایش سلامت و نشاط سگ.	470000.00	supplement	/pic/products/vitaminsag.jpeg	4.70	16	\N	0	f	f	f	Persa	t	["Supplement", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
37	کیف حمل سگ RoyalMAN	کیف حمل سبک و مقاوم با دریچه‌های تهویه و دسته ارگونومیک، مناسب استفاده روزانه و سفر.	2150000.00	accessories	/pic/products/zipoboxdogsamll.jpg	4.70	9	\N	0	f	f	f	RoyalMAN	t	["Carrier", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
38	غذای سگ Mofeed (۳ کیلوگرم)	غذای خشک کامل مناسب سگ‌های بالغ با پروتئین بالا، ویتامین‌ها و مواد معدنی ضروری.	780000.00	dog-food	/pic/products/ضشظشسشل۱.jpg	4.80	12	\N	0	f	f	f	Mofeed	t	["Dog Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
39	کیف حمل گربه Mook	کیف حمل شیک و مقاوم با طراحی مدرن، مناسب گربه‌ها و حیوانات خانگی کوچک.	1980000.00	accessories	/pic/products/bagcatmaxi.webp	4.60	11	\N	0	f	f	f	Mook	t	["Carrier", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
40	اسباب‌بازی گربه HomePUSH	اسباب‌بازی تعاملی مناسب افزایش تحرک، سرگرمی و کاهش استرس گربه.	290000.00	toy	/pic/products/asbabbzai gorbe.jpg	4.80	22	\N	0	f	f	f	HomePUSH	t	["Toy", "Interactive", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
41	اسباب‌بازی سگ Trixie	اسباب‌بازی مقاوم مناسب بازی روزانه و تقویت فعالیت بدنی سگ‌ها.	340000.00	toy	/pic/products/bazisag1.webp	4.60	18	\N	0	f	f	f	Trixie	t	["Toy", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
42	باکس حمل سگ و گربه سایز ۴ پانیتو	باکس حمل بزرگ با بدنه مقاوم، تهویه مناسب و قفل ایمن برای سفر.	2350000.00	accessories	/pic/products/boxsqodo.webp	4.80	7	\N	0	f	f	f	Panito	t	["Carrier", "Travel"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
43	پک کامل نظافت NaniKiti	مجموعه کامل برس، شانه، ناخن‌گیر و لوازم بهداشتی برای مراقبت از حیوانات خانگی.	990000.00	grooming	/pic/products/packkamelnezafat.webp	4.90	10	\N	0	f	f	f	NaniKiti	t	["Featured", "Best Seller", "Grooming", "New"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
44	قلاده گربه	قلاده سبک و قابل تنظیم با قفل ایمن، مناسب استفاده روزمره.	210000.00	accessories	/pic/products/qalade3.webp	4.50	20	\N	0	f	f	f	LOO	t	["Collar", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
45	قلاده گربه LOO	قلاده نرم و بادوام با طراحی زیبا و قابلیت تنظیم برای انواع گربه.	240000.00	accessories	/pic/products/qalade5.webp	4.70	17	\N	0	f	f	f	LOO	t	["Collar", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
46	قلاده پلاستیکی گربه	قلاده مقاوم و سبک با سگک ایمن، مناسب استفاده روزانه.	180000.00	accessories	/pic/products/qaladegorbe1.webp	4.40	25	\N	0	f	f	f	Pet Collar	t	["Collar", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
47	قطره مولتی ویتامین گربه EuroPET	قطره ویتامینی برای تقویت سیستم ایمنی، سلامت پوست و افزایش اشتهای گربه.	390000.00	supplement	/pic/products/qatrecat.webp	4.80	13	\N	0	f	f	f	EuroPET	t	["Vitamin", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
48	غذای گربه Relaxy	غذای خشک با کیفیت مناسب گربه‌های بالغ، سرشار از پروتئین و مواد معدنی.	670000.00	cat-food	/pic/products/relaxygorbe.webp	4.60	16	\N	0	f	f	f	Relaxy	t	["Cat Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
49	غذای گربه Mofeed (۲ کیلوگرم)	غذای خشک کامل مناسب استفاده روزانه با هضم آسان و طعم دلچسب.	540000.00	cat-food	/pic/products/Mofeed.jpg	4.70	15	\N	0	f	f	f	Mofeed	t	["Cat Food"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
50	غذای ماهی Tropical	غذای تخصصی انواع ماهیان زینتی با ترکیبات مغذی و هضم آسان.	360000.00	fish-food	/pic/products/qazamahi4.webp	4.80	19	\N	0	f	f	f	Tropical	t	["Fish Food", "Premium"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
51	موش اسباب‌بازی گربه	اسباب‌بازی پارچه‌ای مناسب سرگرمی، شکار و افزایش فعالیت گربه.	165000.00	toy	/pic/products/bazigorbe.jpg	4.50	28	\N	0	f	f	f	Cat Mouse	t	["Toy", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
52	اسباب‌بازی اتوماتیک گربه	اسباب‌بازی هوشمند با حرکت خودکار برای سرگرمی و افزایش تحرک گربه.	890000.00	toy	/pic/products/bazigorbe2.jpeg	4.90	8	\N	0	f	f	f	Smart Pet	t	["Interactive", "Toy", "Cat"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
53	اسباب‌بازی سگ Yoran	اسباب‌بازی مقاوم مناسب سگ‌های کوچک، قابل شست‌وشو و مناسب بازی روزانه.	310000.00	toy	/pic/products/bazisag3.jpeg	4.70	14	\N	0	f	f	f	Yoran	t	["Toy", "Dog"]	2026-08-03 23:40:23.800216	2026-08-03 23:40:23.800216
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, phone, name, email, city, created_at, updated_at) FROM stdin;
1	09123456789	\N	\N	\N	2026-08-04 10:49:19.064668	2026-08-04 10:49:19.064668
2	09132039924	\N	\N	\N	2026-08-04 11:49:04.008187	2026-08-04 11:49:04.008187
3	09011220330	\N	\N	\N	2026-08-04 12:16:53.16383	2026-08-04 12:16:53.16383
\.


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.articles_id_seq', 1, false);


--
-- Name: otp_codes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.otp_codes_id_seq', 5, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: articles articles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- Name: articles articles_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_slug_key UNIQUE (slug);


--
-- Name: otp_codes otp_codes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.otp_codes
    ADD CONSTRAINT otp_codes_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict 9fdUhIiY2ZcyAJ2oObrsozdv2OM46qvoHL46B6Qq6ZRN3UnHcWkvgI6m675M4Py

