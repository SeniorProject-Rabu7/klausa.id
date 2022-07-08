import json
import logging
import os
import azure.functions as func
from flair.data import Sentence
from flair.models import SequenceTagger

cors_headers = {
    'Access-Control-Allow-Origin': '*'
}

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info(f'Request received')

    text = req.params.get('text')
    if not text:
        logging.info('No text provided for the request')
        return func.HttpResponse('No "text" parameter provided', status_code=400, headers=cors_headers)

    logging.info(f'Sentence: "{text}"')

    try:
        sentence = Sentence(text)
        # logging.info(os.getcwd())
        pos_tagger_model = SequenceTagger.load('process-text/final-model.pt')
        pos_tagger_model.predict(sentence)

        result = []
        for token in sentence.tokens:
            result.append({
                'wordIndex': token.idx - 1, # Because apparently the idx starts from 1
                'wordSpelling': token.text,
                'wordTypeRaw': token.tag
            })

        return func.HttpResponse(json.dumps(result), mimetype='application/json', headers=cors_headers)
    except:
        return func.HttpResponse(status_code=400, headers=cors_headers)
