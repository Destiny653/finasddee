export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { trans_ref } = body || {};

    if (!trans_ref || typeof trans_ref !== 'string') {
      return new Response(JSON.stringify({ error: 'trans_ref is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const username = process.env.NEXT_PUBLIC_API_USERNAME;
    const password = process.env.NEXT_PUBLIC_API_PASSWORD;
    const pin = process.env.NEXT_PUBLIC_API_PIN;
    const submit = process.env.NEXT_PUBLIC_API_SUBMIT || 'Submit';

    if (!username || !password || !pin) {
      return new Response(
        JSON.stringify({ error: 'Server configuration error: missing USERNAME, PASSWORD, or PIN' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare payload. Adjust if the upstream expects a different structure/content type.
    const upstreamResponse = await fetch(
      'https://test4.remit.by/finasddeetest/ws/transaction/getTransactionStatus',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/xml, text/xml, */*',
        },
        body: JSON.stringify({ username, password, pin, submit, trans_ref }),
        // Important: do not pass along credentials
      }
    );

    const text = await upstreamResponse.text();

    return new Response(text, {
      status: upstreamResponse.status,
      headers: { 'Content-Type': 'text/xml; charset=utf-8' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
