-- JOIN
select clients.first_name, clients.last_name, billing.amount, billing.charged_datetime
from clients
join billing on clients.id = billing.clients_id;

-- JOIN ON MULTIPLE TABLES
select clients.first_name as client_first, clients.last_name, sites.domain_name, leads.first_name as leads_first
from clients
join sites on clients.id = sites.clients_id
join leads on sites.id = leads.sites_id;

-- LEFT JOINS (getting results from the left table that doesn't have a match on the right table)
select clients.first_name, clients.last_name, sites.domain_name
from clients -- THE LEFT TABLE
left join sites on clients.id = sites.clients_id; -- THE RIGHT TABLE

-- GROUP BY with SUM, MIN, MAX, AVG
select clients.first_name, clients.last_name, sum(billing.amount)
from clients
join billing on clients.id = billing.clients_id
group by clients.id;

-- GROUP CONCAT
select group_concat(' ', sites.domain_name) as domains, clients.first_name, clients.last_name
from clients
join sites on clients.id = sites.clients_id
group by clients.id;

-- COUNT
select count(leads.id), sites.domain_name
from sites
join leads on sites.id = leads.sites_id
group by sites.id;