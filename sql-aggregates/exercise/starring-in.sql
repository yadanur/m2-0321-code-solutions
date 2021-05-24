select "categories"."name",
        count("films"."filmId") as "number of films"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa'
and   "actors"."lastName" = 'Monroe'
group by "categories"."name";
