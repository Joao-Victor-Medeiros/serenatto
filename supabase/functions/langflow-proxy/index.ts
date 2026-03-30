import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const LANGFLOW_HOST = "http://4.168.234.223:7860";
const FLOW_ID = "12a115b5-baf6-49cc-a5e4-7b5bdb2d2520";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    const response = await fetch(`${LANGFLOW_HOST}/api/v1/run/${FLOW_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input_value: body.input_value,
        output_type: "chat",
        input_type: "chat",
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Langflow proxy error:", error);
    return new Response(
      JSON.stringify({ error: "Falha ao conectar com o Langflow" }),
      { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
