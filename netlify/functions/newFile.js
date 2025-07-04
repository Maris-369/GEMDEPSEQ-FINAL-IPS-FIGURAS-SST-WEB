<script>
  window<script>
    window.claude = {complete}: async function(prompt) { }
    const res = await fetch('/.netlify/functions/claude', {method}: 'POST',
    headers: {'Content-Type'}: 'application/json' },
    body: JSON.stringify({prompt})
    });
    const data = await res.json();
    return data.reply;
  }
};
  </script>.claude = {complete}: async function(prompt) { }
  const res = await fetch('/.netlify/functions/claude', {method}: 'POST',
  headers: {'Content-Type'}: 'application/json' },
  body: JSON.stringify({prompt})
    });
  const data = await res.json();
  return data.reply;
  }
};
</script>;
