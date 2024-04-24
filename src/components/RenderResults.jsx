import { 
    useMatches,
    KBarResults
} from "kbar";

export default function RenderResults() {
    const { results } = useMatches();
    return (
      <KBarResults
        items={results}
        maxHeight="500px"
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className="py-2 px-3 rounded-md m-1">{item}</div>
          ) : (
            <div
              className="py-2 px-3 rounded-md flex justify-between items-center gap-2"
              style={{
                background: active ? "#eee" : "transparent",
              }}
            >
              {item?.icon}
              <p className="flex-1 font-medium text-gray-950/80">{item.name}</p>
              <code className="opacity-80 px-[0.1rem] bg-gray-200 rounded">{item?.shortcut}</code>
            </div>
          )
        }
      />
    );
  }